/**
	Mongoose is a package used to create schemas for MongoDB.
	Schema: a description of how data is stored in the database
	Mongo: a database used to store data
**/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Creates schema for Question with required attributes and data types
var QuestionSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true },
  postedby: { type: String, required: false },
  answers: [{ type: String, required: false }],
  upvotedby: [{ type: String, required: false }],
  downvotedby: [{type:String, required:false}],
  time: {
    type: Date,
    default:Date.now
  },
});

const Question = mongoose.model("Question", QuestionSchema);
// Below code used for exporting the Schemas
// Used when we need to import the below Schemas in another file.
module.exports = { Question: Question };
