const mongoose = require("mongoose");

const Mission = mongoose.model("Mission", {
  location: String,
  city: String,
  referent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assignedDrawer: [{ type: mongoosse.Schema.Types.objectId, ref: "User" }],
  interventionDates: [
    {
      day: mongoose.Schema.Types.Date,
      mission: String,
      operators: [{ type: mongoose.Schema.Types.ObjectId, ref: User }],
    },
  ],
  missionType: String,
  needDetection: Boolean,
  needSurvey: Boolean,
  needProcess: Boolean,
});
