import React from 'react';
import './videoplayer.css';








export default function VideoPlayer(props) {

  let url = `https://www.youtube.com/embed/${props.videoId}`
    
  return (
    <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={url}
            frameBorder="0">
        </iframe>
    </div>
  );
  
  
  }
