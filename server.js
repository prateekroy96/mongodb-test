var express = require("express");
let util = require("util");
const cors = require("cors");
var mongoose = require("mongoose").set("debug", false);
const setTimeoutPromise = util.promisify(setTimeout);
const path = require("path");

var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var studentSchema = new Schema(
  {
    name: String,
    class: {
      type: Number,
      index: true
    },
    section: {
      type: String,
      enum: ["A", "B","C","D","E"],
      index = true
    },
  },
  {
    timestamp: true,
  }
);
studentSchema.index({ user_id_1: 1, user_id_2: 1 }, { unique: true });
// Create model from the schema
var Friend = mongoose.model("Friend", studentSchema);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/testDB", {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
