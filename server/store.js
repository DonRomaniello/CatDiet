import axios from "axios";

const initialState = [];

const SET_FOOD "SET_FOOD";

// const SET_CATS "SET_CATS";

// const ADD_WEIGHT "ADD_WEIGHT";

// const ADD_FOOD "ADD_FOOD";

const _setFood = (food) => {
  return {
    type: SET_FOOD,
    food
  };
};

// const _setCats = (cats) => {
//   return {
//     type: SET_CATS,
//     cats
//   };
// };

// const _addWeight = (weight) => {
//   return {
//     type: ADD_WEIGHT,
//     weightId
//   };
// };

// const _addFood = (food) => {
//   return {
//     type: ADD_FOOD,
//     foodId
//   };
// };

export const fetchFood = () => {
  return async (dispatch) => {
    try {

    const response = await axios.get('/api/currentFood')

    const {luni, sebastian} = response.data;

    dispatch(_setFood(luni, sebastian));

  } catch (err){
      console.log(err);
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type){

    case SET_FOOD:

      return [ action.luni, action.sebastian ];

    default:

      return state;
    }





}

