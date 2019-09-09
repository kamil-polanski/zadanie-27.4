import {
  ADD_COMMENT,
  REMOVE_COMMENT
} from './actions';

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
      },
      ...state];
    case REMOVE_COMMENT:
      return [{
        comments: state.filter(comment => comment.id !== action.id)
      }];
    default:
      return state;
  }
}