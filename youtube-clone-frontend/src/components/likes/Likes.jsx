import React, { useState } from "react";
import "./likes.css";


function LikesDislikes({ likes }) {
    const [liked, setLiked] = useState(false);

    
  
    return (
      <div className="LikesDislikes">
        <div className="likesDislike">
          {liked ? (
            <img className="likeIcon" src="../assets/Thumb-up.jpg" alt="like" fontSize="medium" onClick={(event) => setLiked(false)} />
          ) : (
            <img className="likeIconLiked" src="../assets/empty thumb.jpg"
              fontSize="medium" alt="like"
              onClick={(event) => setLiked(true)}
            />
          )}
        </div>
      </div>
    );
  }
 
export default LikesDislikes;