import axios from 'axios';
import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  SEARCH_COUNTRY,
  ORDER_COUNTRIES,
  FILTER_BY_CONTINENT,
  CREATE_ACTIVITY,
} from './types';



const BASE_URL = "http://localhost:3001";

export function getCountries() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${BASE_URL}/countries`)
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    };
  };
};


export const getDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/countries/${id}`);
    dispatch({
      type: GET_DETAIL,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};


export const searchCountry = (searchTerm) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/countries/name/${searchTerm}`);
      const data = await response.json();
      dispatch({
        type: SEARCH_COUNTRY,
        payload: data,
      });
    } catch (error) {
      return console.log(error);
    }
  };
};

export const orderCountries = (order) => ({
  type: ORDER_COUNTRIES,
  payload: order
});

export const filterByContinent = (continent) => {
  const payload = continent === "ALL" ? null : continent;
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};


export const createActivity = (activityData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3001/activities/', activityData)
    dispatch({ type: CREATE_ACTIVITY, payload: res.data })
  } catch (error) {
    console.error(error)
  }
};




