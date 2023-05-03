import { COMMENT_CREATE } from "./types";
import { ErrorOn } from "./actions";

const badWords = ["dick", "stupid"];

export function spamFilter({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some((res) =>
          action.data.text.includes(res)
        );
        if (hasBadWords) {
          return dispatch(ErrorOn("You should be polite!"));
        }
      }
      return next(action);
    };
  };
}
