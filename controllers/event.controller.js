const mongoose = require("mongoose");
const Event = require("../models/event.model");
const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Get events
// @route   GET /events
exports.getEvents = asyncHandler(async (req, res, next) => {
  let filter, query;
  let search = req.query.search || "";
  let sort = req.query.sort;
  let category = req.query.category || "All";
  let place = req.query.place;

  const categoryOptions = [
    "Web Development",
    "Mobile Development",
    "UI/UX",
    "Data Science",
    "Business",
    "Blockchain",
    "AI/ML",
    "Other",
  ];
  category === "All"
    ? (category = [...categoryOptions])
    : (category = req.query.category.split(","));

  place = place ? place.split(",") : null;

  if (place) {
    filter = {
      name: { $regex: search, $options: "i" },
      $and: [{ category: { $in: category } }, { place: { $in: place } }],
    };
  } else {
    filter = {
      name: { $regex: search, $options: "i" },
      category: { $in: category },
    };
  }

  if (sort) {
    query = Event.find(filter).sort(sort);
  } else {
    query = Event.find(filter).sort("createdAt");
  }

  // Pagination
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 25;
  const startId = (page - 1) * limit;
  const endId = page * limit;
  const total = await Event.countDocuments(filter);
  const pagination = { total };
  query.skip(startId).limit(limit);
  if (endId < total) {
    pagination.next = page + 1;
    pagination.limit = limit;
  }
  if (startId > 0) {
    pagination.prev = page - 1;
    pagination.limit = limit;
  }

  const data = await query;

  return res
    .status(200)
    .json({ success: true, count: data.length, pagination, data });
});

// @desc    Create event
// @route   POST /events
exports.postEvent = asyncHandler(async (req, res, next) => {
  const { name, description, category, place } = req.body;
  const date = new Date(req.body.date);
  if (new Date() > new Date(req.body.date)) {
    return next(
      new ErrorResponse(
        `Please provide date from future. Plan events for future.`,
        400
      )
    );
  }
  const event = await Event.create({
    name,
    description,
    category,
    place,
    date,
  });
  res.status(201).json({ success: true, data: event });
});

// @desc    Get single event
// @route   GET /event/:id
exports.getEvent = asyncHandler(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new ErrorResponse(`Invalid Id ${req.params.id}`, 400));
  }
  const event = await Event.findById(req.params.id);
  if (!event) {
    return next(new ErrorResponse(`No Event with id ${req.params.id}`, 400));
  }
  res.status(200).json({ success: true, data: event });
});

// @desc    Update event
// @route   PUT /event/:id
exports.putEvent = asyncHandler(async (req, res, next) => {
  // id validity check
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new ErrorResponse(`Invalid Id ${req.params.id}`, 400));
  }
  let event = await Event.findById(req.params.id);
  // check event with id exists
  if (!event) {
    return next(new ErrorResponse(`No event with id ${req.params.id}`, 400));
  }
  // check event organize in future only
  if (req.body.date) {
    if (new Date() > new Date(req.body.date)) {
      return next(
        new ErrorResponse(
          `Please provide date from future. Plan events for future.`,
          400
        )
      );
    }
  }
  // remove invalid body
  const expectedBody = ["name", "description", "category", "place", "date"];
  Object.keys(req.body).forEach((val) => {
    if (!expectedBody.includes(val)) {
      delete req.body[val];
    }
  });
  // if all check successful update event
  event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: event });
});

// @desc    Delete event
// @route   DELETE event/:id
exports.deleteEvent = asyncHandler(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new ErrorResponse(`Invalid Id ${req.params.id}`, 400));
  }
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) {
    return next(new ErrorResponse(`No Event with id ${req.params.id}`, 400));
  }
  res.status(200).json({ success: true, data: event });
});
