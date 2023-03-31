import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  SEARCH_COUNTRY,
  ORDER_COUNTRIES,
  FILTER_BY_CONTINENT,
  CREATE_ACTIVITY,
} from '../actions/types';

const initialState = {
  countries: [],
  filteredCountries: [],
  detail: "",
  order: "Abc",
  continentFilter: "",
  activities: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case ORDER_COUNTRIES:
      const sortedCountries =
        action.payload === "Abc"
          ? [...state.countries].sort((a, b) => a.name.localeCompare(b.name))
          : [...state.countries].sort((a, b) => b.name.localeCompare(a.name))
      return {
        ...state,
        filteredCountries: sortedCountries,
        order: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const filteredByContinent = action.payload
        ? state.countries.filter((c) => c.continent === action.payload)
        : state.countries;
      return {
        ...state,
        filteredCountries: filteredByContinent,
        continentFilter: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
        error: null,
      };
    default:
      return state;
  }
};

export default countriesReducer;
