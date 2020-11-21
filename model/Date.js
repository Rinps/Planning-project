const mongoose = require("mongoose");

const Date = mongoose.model("Date", {
  day: { type: mongoose.Schema.Types.Date, required: true, unique: true },
  missions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Missions" }],
});
