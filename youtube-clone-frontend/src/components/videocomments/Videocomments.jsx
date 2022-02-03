import React from 'react';

export default function Videocomments(props) {




// console.log(props.comments)
  return <div>
           {props.comments.map((comment) => {
               return(<p>
                   {comment.user.username}
                   {comment.text}
                   {comment.likes}
                   {comment.dislikes}
               </p>)
           }) } 

        </div>;
}
