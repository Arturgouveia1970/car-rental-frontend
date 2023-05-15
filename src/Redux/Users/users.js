/* eslint linebreak-style: ["error", "windows"] */
// const url = 'https://dreamcars.onrender.com/api/v1/users';

// actions

const GET_USER = 'redux/Users/users/GET_USER';

// reducer

const usersReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
};

//  actions

const getUser = (id) => async (dispatch) => {
  // const requestParameters = {
  //   headers: {
  //     Authorization: JSON.parse(localStorage.getItem('current_user')).token,
  //   },
  // };
  const response = await fetch(`https://dreamcars.onrender.com/api/v1/users/${id}/User`);
  const Users = await response.json();
  dispatch({
    type: GET_USER,
    payload: Users,
  });
};

export { getUser, usersReducer };
