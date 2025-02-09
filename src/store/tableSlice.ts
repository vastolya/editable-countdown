import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableCell {
  id: string;
  value: string;
  initialValue: string;
}

interface TableState {
  cells: TableCell[];
  editedCells: Record<string, string>;
  isCounting: boolean;
  lastEditTime: number | null;
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
    { id: "efficiency", value: "98.4", initialValue: "98.4" },
    {
      id: "comment",
      value: "Комментарий в 3-5 строчек, который тоже можно редактировать.",
      initialValue:
        "Комментарий в 3-5 строчек, который тоже можно редактировать.",
    },
    { id: "personnel_header", value: "Персонал", initialValue: "Персонал" },
    { id: "personnel_id", value: "КТП 2000 321", initialValue: "КТП 2000 321" },
    { id: "hours", value: "24", initialValue: "24" },
    { id: "spi", value: "SPI 3432", initialValue: "SPI 3432" },
    {
      id: "machine_status",
      value: "Функционирует, но не бьет",
      initialValue: "Функционирует, но не бьет",
    },
  ],
  editedCells: {},
  isCounting: false,
  lastEditTime: null,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateCellValue: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      const { id, value } = action.payload;
      const cell = state.cells.find((cell) => cell.id === id);
      if (!cell) return;

      state.lastEditTime = Date.now();

      if (value !== cell.initialValue) {
        state.editedCells[id] = value;
        state.isCounting = true;
      } else {
        delete state.editedCells[id];
        if (Object.keys(state.editedCells).length === 0) {
          state.isCounting = false;
        }
      }

      cell.value = value;
    },

    resetTimer: (state) => {
      state.isCounting = false;
    },

    logEditedCells: (state) => {
      console.log(
        "Измененные ячейки:",
        JSON.parse(JSON.stringify(state.editedCells))
      );
      state.editedCells = {};
      state.isCounting = false;
      state.lastEditTime = null;
    },
  },
});

export const { updateCellValue, resetTimer, logEditedCells } =
  tableSlice.actions;
export default tableSlice.reducer;
