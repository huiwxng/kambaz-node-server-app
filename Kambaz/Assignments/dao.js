import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function AssignmentsDao() {
  async function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
  }

  async function findAssignmentById(assignmentId) {
    return model.findById(assignmentId);
  }

  async function createAssignment(courseId, assignment) {
    const newAssignment = { ...assignment, _id: uuidv4(), course: courseId };
    const doc = await model.create(newAssignment);
    return doc;
  }

  async function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
  }

  async function updateAssignment(assignmentId, assignmentUpdates) {
    await model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
    return findAssignmentById(assignmentId);
  }

  return {
    findAssignmentsForCourse,
    findAssignmentById,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
}