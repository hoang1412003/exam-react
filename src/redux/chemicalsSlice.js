import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  chemicals: [
    { id: 1, name: 'Hydrochloric Acid', formula: "HCL" },
    { id: 2, name: 'Sodium Chloride', formula: "NACL" },
    { id: 3, name: 'Sulfuric Acid', formula: "H2SO4" },
    { id: 4, name: 'Ammonia', formula: "NH3" },
    { id: 5, name: 'Ethanol', formula: "C2H5OH" }
  ]
};

if (localStorage.getItem("state")) {
  initialState = JSON.parse(localStorage.getItem("state"))
}

const chemicalsSlice = createSlice({
  name: 'chemicals',
  initialState,
  reducers: {
    addChemical(state, action) {
      const idMax = state.chemicals.length + 1
      state.chemicals = [...state.chemicals, { id: state.chemicals.length === 0 ? 1 : idMax, ...action.payload }]
      localStorage.setItem("state", JSON.stringify(state))
    },
    deleteChemical(state, action) {
      state.chemicals = state.chemicals.filter(item => item.id !== action.payload);
      localStorage.setItem("state", JSON.stringify(state))
    },
    updateChemical(state, action){
      state.chemicals =state.chemicals.map((item)=>item.id === action.payload.id?{...item, name: action.payload.name, formula: action.payload.formula}:item)
      localStorage.setItem("state", JSON.stringify(state))
    },
    filterNamefc(state, action){
      console.log(action.payload)
      if(action.payload.flag === "name"){
        return state.chemicals.filter((item)=>item.name === action.payload.name);
      }
      return state.chemicals;
    }
  }
});

export const { addChemical, deleteChemical, updateChemical, filterNamefc } = chemicalsSlice.actions;
export default chemicalsSlice.reducer;


  