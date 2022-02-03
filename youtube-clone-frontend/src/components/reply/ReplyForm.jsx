import {React, useState} from 'react';



export default function ReplyForm(props) {

    const[reply, setReply] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        props.createReply(reply);
        console.log(reply)
        
       
    };

    


  return (<div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Write your reply here" required ='required' className="replyInput" onChange={(e) => setReply(e.target.value)} defaultValue={reply} />
            <button className='replyButton' onClick={handleSubmit}> Reply </button>
        </form>
  </div>);
}