import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
	{
		_id: String,
		title: String,
		description: String,
		availableDate: Date,
		dueDate: Date,
		points: Number,
		course: String,
	},
	{ collection: "assignments" }
);

export default assignmentSchema;
