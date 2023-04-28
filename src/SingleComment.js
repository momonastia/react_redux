import { useState, useEffect } from "react";

function SingleComment({ data }) {
  /* console.log("single comment props >", props); */

  const [commentText, setCommentText] = useState("");

  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
