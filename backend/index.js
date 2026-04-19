const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({ origin: ["http://localhost:3000", "https://grandvenue.in"], credentials: true }));
app.use(express.json());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use("/api/", limiter);

// ── In-Memory Data Store (replace with DB) ─────
const halls = require("./data/halls.json");
let inquiries = [];
let bookings = [];

// ── Health Check ────────────────────────────────
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "GrandVenue API is running 🚀", version: "1.0.0" });
});

// ── Halls Routes ────────────────────────────────
// GET /api/halls — list with filters
app.get("/api/halls", (req, res) => {
  try {
    let result = [...halls];
    const { event, city, minCapacity, maxPrice, facilities, sort, q } = req.query;

    if (q) {
      const query = q.toLowerCase();
      result = result.filter(
        (h) =>
          h.name.toLowerCase().includes(query) ||
          h.location.toLowerCase().includes(query) ||
          h.city.toLowerCase().includes(query)
      );
    }

    if (event) {
      result = result.filter((h) =>
        h.eventTypes.some((e) => e.toLowerCase().includes(event.toLowerCase()))
      );
    }

    if (city) {
      result = result.filter((h) => h.city.toLowerCase().includes(city.toLowerCase()));
    }

    if (minCapacity) {
      result = result.filter((h) => h.maxCapacity >= Number(minCapacity));
    }

    if (maxPrice) {
      result = result.filter((h) => h.pricePerEvent <= Number(maxPrice));
    }

    if (facilities) {
      const fList = facilities.split(",");
      result = result.filter((h) =>
        fList.every((f) =>
          h.facilities.some((hf) => hf.toLowerCase().includes(f.toLowerCase()))
        )
      );
    }

    if (sort === "price_asc") result.sort((a, b) => a.pricePerEvent - b.pricePerEvent);
    else if (sort === "price_desc") result.sort((a, b) => b.pricePerEvent - a.pricePerEvent);
    else if (sort === "capacity") result.sort((a, b) => b.maxCapacity - a.maxCapacity);
    else result.sort((a, b) => b.rating - a.rating);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    const start = (page - 1) * limit;
    const paginated = result.slice(start, start + limit);

    res.json({
      halls: paginated,
      total: result.length,
      page,
      totalPages: Math.ceil(result.length / limit),
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/halls/:slug
app.get("/api/halls/:slug", (req, res) => {
  const hall = halls.find((h) => h.slug === req.params.slug);
  if (!hall) return res.status(404).json({ error: "Hall not found" });
  res.json(hall);
});

// GET /api/halls/:slug/availability
app.get("/api/halls/:slug/availability", (req, res) => {
  const hall = halls.find((h) => h.slug === req.params.slug);
  if (!hall) return res.status(404).json({ error: "Hall not found" });

  const { date } = req.query;
  if (!date) return res.status(400).json({ error: "Date required" });

  const isBooked = hall.bookedDates.includes(date);
  res.json({ date, available: !isBooked, hall: hall.name });
});

// ── Inquiries/Bookings Routes ───────────────────
// POST /api/inquiries
app.post("/api/inquiries", (req, res) => {
  const { name, phone, date, guests, eventType, message, hallId } = req.body;

  if (!name || !phone || !date || !guests || !eventType) {
    return res.status(400).json({ error: "Missing required fields: name, phone, date, guests, eventType" });
  }

  const inquiry = {
    id: uuidv4(),
    name,
    phone,
    date,
    guests: Number(guests),
    eventType,
    message: message || "",
    hallId: hallId || null,
    status: "new",
    createdAt: new Date().toISOString(),
  };

  inquiries.push(inquiry);

  console.log(`📩 New inquiry from ${name} (${phone}) — ${eventType} on ${date}`);

  res.status(201).json({
    success: true,
    message: "Inquiry received! Our team will contact you within 30 minutes.",
    inquiryId: inquiry.id,
  });
});

// GET /api/inquiries — admin only (basic key auth)
app.get("/api/inquiries", (req, res) => {
  const key = req.headers["x-admin-key"];
  if (key !== "grandvenue2026") return res.status(401).json({ error: "Unauthorized" });
  res.json({ inquiries, total: inquiries.length });
});

// PATCH /api/inquiries/:id — update status
app.patch("/api/inquiries/:id", (req, res) => {
  const key = req.headers["x-admin-key"];
  if (key !== "grandvenue2026") return res.status(401).json({ error: "Unauthorized" });

  const inquiry = inquiries.find((i) => i.id === req.params.id);
  if (!inquiry) return res.status(404).json({ error: "Inquiry not found" });

  const { status } = req.body;
  inquiry.status = status;
  res.json({ success: true, inquiry });
});

// POST /api/bookings
app.post("/api/bookings", (req, res) => {
  const { inquiryId, hallSlug, name, phone, date, guests, eventType, totalPrice } = req.body;

  if (!hallSlug || !name || !phone || !date) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const booking = {
    id: uuidv4(),
    inquiryId: inquiryId || null,
    hallSlug,
    name, phone, date,
    guests: Number(guests),
    eventType,
    totalPrice: Number(totalPrice),
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  console.log(`✅ New booking: ${name} — ${hallSlug} on ${date}`);

  res.status(201).json({
    success: true,
    message: "Booking confirmed!",
    bookingId: booking.id,
  });
});

// ── Stats Route ─────────────────────────────────
app.get("/api/stats", (req, res) => {
  res.json({
    totalHalls: halls.length,
    totalInquiries: inquiries.length,
    totalBookings: bookings.length,
    featuredHalls: halls.filter((h) => h.featured).length,
  });
});

// ── Start ────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 GrandVenue API running at http://localhost:${PORT}`);
});

module.exports = app;
