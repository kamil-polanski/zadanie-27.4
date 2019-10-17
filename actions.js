import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
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

export function rmComment(id) {
  return {
      type: REMOVE_COMMENT,
      id
  }
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id,
  };
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}