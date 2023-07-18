// reducer.js
import { SET_ORDER_BY_NAME } from "./action";
const initialState = {
  habitaciones: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_BY_NAME:
      let sortedArrByName;
      if (action.payload === "asc") {
        sortedArrByName = state.habitaciones
          .slice()
          .sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else if (action.payload === "desc") {
        sortedArrByName = state.habitaciones
          .slice()
          .sort((a, b) => b.nombre.localeCompare(a.nombre));
      } else {
        sortedArrByName = state.habitaciones;
      }
      return {
        ...state,
        orderByName: action.payload,
        habitaciones: sortedArrByName,
      };
    }
};

export default rootReducer;
