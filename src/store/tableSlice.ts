import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableCell {
  id: string;
  value: string;
  initialValue: string;
}

interface TableState {
  cells: TableCell[];
}

const initialState: TableState = {
  cells: [
    { id: "date", value: "30 января 2024", initialValue: "30 января 2024" },
    { id: "shift", value: "Смена 2", initialValue: "Смена 2" },
    { id: "master", value: "Иванов И. И.", initialValue: "Иванов И. И." },
    { id: "equipment", value: "РПТКМ-120", initialValue: "РПТКМ-120" },
    {
      id: "personnel",
      value: "100500 человек",
      initialValue: "100500 человек",
    },
    { id: "status", value: "Работает", initialValue: "Работает" },
    { id: "efficiency", value: "98.4%", initialValue: "98.4%" },
    { id: "comment", value: "Комментарий...", initialValue: "Комментарий..." },
  ],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateCellValue: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      const cell = state.cells.find((cell) => cell.id === action.payload.id);
      if (cell) {
        cell.value = action.payload.value;
      }
    },
  },
});

export const { updateCellValue } = tableSlice.actions;
export default tableSlice.reducer;
