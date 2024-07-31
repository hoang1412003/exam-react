import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  students: [
    { id: 1, name: 'hoang', checked: false },
    { id: 2, name: 'hoang1', checked: false },
  ]
};

if(localStorage.getItem("state")) {
  initialState = JSON.parse(localStorage.getItem("state"))
}

const studentsSlice = createSlice({
  name: 'tudents',
  initialState,
  reducers: {
    addStudent(state, action) {
      const idMax = state.students.reduce((max, student) => Math.max(max, student.id), 0);
      state.students.push({ id: idMax + 1, name: action.payload, checked: false });
      localStorage.setItem("state", JSON.stringify(state))
    },
    deleteStudent(state, action) {
      state.students = state.students.filter(st => st.id!== action.payload);
      localStorage.setItem("state", JSON.stringify(state))
    },
  }
});

export const { addStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;