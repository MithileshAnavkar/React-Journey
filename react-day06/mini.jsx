import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h1>❤️ {likes} Likes</h1>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>
    </div>
  );
}

export default LikeButton;