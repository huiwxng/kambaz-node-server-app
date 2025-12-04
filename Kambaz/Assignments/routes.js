import AssignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app) {
  const dao = AssignmentsDao();

  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };

  const createAssignmentForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignment = req.body;
    const newAssignment = await dao.createAssignment(courseId, assignment);
    res.json(newAssignment);
  };

  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const result = await dao.deleteAssignment(assignmentId);
    res.json(result);
  };

  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const updates = req.body;
    const updated = await dao.updateAssignment(assignmentId, updates);
    res.json(updated);
  };

  const findAssignmentById = async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await dao.findAssignmentById(assignmentId);
    res.json(assignment);
  };

  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.get("/api/assignments/:assignmentId", findAssignmentById);
}