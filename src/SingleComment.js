import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "./redux/actions";

function SingleComment({ data }) {
  /* console.log("single comment props >", props); */

  const [commentText, setCommentText] = useState("");

  const { text, id } = data;

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Submit >>> ", commentText);
    dispatch(commentUpdate(commentText, id));
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
