import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

function OwnerReview({
  id,
  rating,
  response,
  body,
  name,
  onDeleteReview,
  onResponseReply,
}) {
  const [reply, setReply] = useState("");

  function convertRating(rating) {
    let key = 0;
    let emoji = [];
    for (let i = 0; i < rating; i++) {
      emoji.push(<AiFillStar key={key++} />);
    }
    return emoji;
  }

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
    onDeleteReview(id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ reply }),
    })
      .then((r) => r.json())
      .then((edit) => onResponseReply(edit))
      .then(setReply(""));
  }

  return (
    <div className="owner-review-box">
      <span className="review-box-rating">
        <MdOutlineRemoveCircleOutline onClick={() => handleDelete(id)} />
        {convertRating(rating)}
      </span>
      <p>{name}</p>
      <p>{body}</p>
      <form onSubmit={handleSubmit}>
        <p className="owner-review-response-message">{response}</p>
        <input
          onChange={(e) => setReply(e.target.value)}
          className="owner-review-response"
          type="text"
          value={reply}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default OwnerReview;
