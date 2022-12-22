import React from "react";
import AddStudents from "../AddStudents";

export default function AddStudentsRow() {
  return (
    <div>
        <div className="d-flex">
      <span className="fw-bold fs-2 mx-2">Students</span>
      <AddStudents/>
      </div>
    </div>
  );
}
