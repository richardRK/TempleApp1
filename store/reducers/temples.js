import { TEMPLES } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/temples";

const initialState = {
  temples: TEMPLES,
  filteredTemples: TEMPLES,
  favoriteTemples: [],
};

const templesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteTemples.findIndex(
        (temple) => temple.id === action.templeId
      );
      if (existingIndex >= 0) {
        const updatedFavTemples = [...state.favoriteTemples];
        updatedFavTemples.splice(existingIndex, 1);
        return { ...state, favoriteTemples: updatedFavTemples };
      } else {
        const temple = state.temples.find(
          (temple) => temple.id === action.templeId
        );
        return {
          ...state,
          favoriteTemples: state.favoriteTemples.concat(temple),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredTemples = state.temples.filter((temple) => {
        if (appliedFilters.glutenFree && !temple.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !temple.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !temple.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !temple.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredTemples: updatedFilteredTemples };
    default:
      return state;
  }
};

export default templesReducer;
