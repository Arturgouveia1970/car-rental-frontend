/* eslint linebreak-style: ["error", "windows"] */
const url = 'https://dreamcars.onrender.com/api/v1/users';

// actions

const GET_RESERVATIONS = 'redux/Users/use

// reducer

const reservationsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

//  actions

const getReservations = () => async (dispatch) => {
  const requestParameters = {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('current_user')).token,
    },
  };
  const response = await fetch(`${url}/${JSON.parse(localStorage.getItem('current_user')).id}/reservations`, requestParameters);
  const reservations = await response.json();
  dispatch({
    type: GET_RESERVATIONS,
    payload: reservations,
  });
};

export { getReservations, reservationsReducer };
