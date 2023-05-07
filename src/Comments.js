import { useState, useEffect } from "react";
import { commentCreate, commentsLoad } from "./redux/actions";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";

function Comments(props) {
  const dispatch = useDispatch();

  const [textComment, setTextComment] = useState("");

  const comments = useSelector((state) => {
    console.log("redux state > ", state);
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit textComment > ", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type="text"
          value={textComment}
          onChange={handleInput}
          placeholder="Add comment"
        />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Comments;
