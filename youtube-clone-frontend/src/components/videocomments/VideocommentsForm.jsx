import {React, useState} from 'react';




export default function VideocommentsForm(props) {

    const[comment, setComment] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        props.createComment(comment);
        
       
    };

    


  return (<div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Write your comment here" required ='required' className="commentInput" onChange={(e) => setComment(e.target.value)} defaultValue={comment} />
            <button className='commentButton' onClick={handleSubmit}> Post </button>
        </form>
  </div>);
}
