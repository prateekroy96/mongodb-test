var mongoose = require("mongoose").set("debug", true);
var students = require("./students.json");
mongoose.connect("mongodb://localhost:27017/testDB", {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var studentSchema = new Schema(
  {
    name: String,
    class: {
      type: Number,
      index: true,
    },
    section: {
      type: String,
      enum: ["A", "B", "C", "D", "E"],
      index: true,
    },
  },
  {
    timestamp: true,
  }
);
//studentSchema.index({ class: 1, section: 1 }, { unique: true });
// Create model from the schema
var Student = mongoose.model("Student", studentSchema);
Student.on("index", function (err) {
  if (err) {
    console.error("User index error: %s", err);
  } else {
    console.info("User indexing complete");
  }
});
Student.insertMany(students, {
  upsert: true,
  runValidators: true,
}).then((res) => {
  console.log(res.length);
});
