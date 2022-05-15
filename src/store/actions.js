import { SAVE_COMMENT } from './actionTypes';

export const saveComment = (issueId, comment, commentAuthor, date) => ({
  type: SAVE_COMMENT,
  payload: {
    issueId,
    comment,
    commentAuthor,
    date,
  }
});