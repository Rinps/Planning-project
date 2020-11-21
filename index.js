// Load packages and middleware
const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(formidable());
app.use(cors());
app.use(helmet());
require("dotenv").config();

// Connect database.
mongoose.connect();
