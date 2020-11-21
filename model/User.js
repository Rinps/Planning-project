const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: String,
  account: {
    userName: { type: String, required: true, unique: true },
    age: Number,
    profile: { type: String, required: true },
    picture: Object,
    habilitations: Array,
    vacations: [
      {
        vacationDate: { type: mongoose.Schema.Types.Date },
        vacationType: String,
      },
    ],
  },
  salt: String,
  hash: String,
  assignments: Array,
  pastAssignment: Array,
});

module.exports = User;
