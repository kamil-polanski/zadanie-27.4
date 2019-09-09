import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
      type: ADD_COMMENT,
      text,
      id: uuid.v4()
  }
}

function editComment(text, id) {
  return {
      type: EDIT_COMMENT,
      text,
      id
  }
}

function rmComment(id) {
  return {
      type: REMOVE_COMMENT,
      id
  }
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    votes
  };
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}