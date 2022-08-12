const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pleas add event name"],
      unique: [true],
      trim: true,
      maxlength: [30, "Event name should be less than 30 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add event description"],
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "UI/UX",
        "Data Science",
        "Business",
        "Blockchain",
        "AI/ML",
        "Other",
      ],
    },
    place: {
      type: String,
      require: [true, "Please add place of event"],
    },
    date: {
      type: Date,
      required: [true, "Please add date of an event"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
