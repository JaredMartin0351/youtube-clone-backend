import "./post.css";
import { useState } from "react";

export default function Post({ post }) {

    

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLike] = useState(false)
    
    const likeHandler =() =>{
        setLike(isLiked ? like - 1 : like + 1)
        setIsLike(!isLiked)
    }
    let url
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className="postProfileImg" 
                            src={url} 
                            alt="Post Profile Pic"
                        />
                        <span className="postUsername">
                            {}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                       
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="Your comment here" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/Thumb-Up.jpg" onClick={likeHandler} alt="Thumbs Up" />
                        <img className="likeIcon" src="assets/Thumb-Down.jpg" onClick={likeHandler} alt="Thumbs Down" />
                        <span className="postLikeCounter">{like} people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
