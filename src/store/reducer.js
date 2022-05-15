import { SAVE_COMMENT } from "./actionTypes";

const initialState = {
  comments: [],
};

function commentsReducer(state=initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      const newComments = [ ...state.comments ];
      console.log(10101, action.payload)
      newComments.push(action.payload);
      return {...state, comments: newComments}
    default:
      return state;
  }
}

export default commentsReducer;