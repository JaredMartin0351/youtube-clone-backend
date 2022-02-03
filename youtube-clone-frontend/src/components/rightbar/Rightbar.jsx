import "./rightbar.css";



export default function RightBar(props) {

  


        return(
            <div className="rightbar">
                <div className="rightbarWrapper">
                 <h1>Related Videos</h1>

                {props.relatedVideos.map((element, index) => {
                    if (element.snippet){
                        return (<img key={index} onClick={() => props.setVideoId(element.id.videoId)} src= {element.snippet.thumbnails.default.url}></img>)
                    }
                    else {
                        return <div></div>
                    }
                })}
                </div>
            </div>
    );
}



// {Users.map((u) => (
//     //                         <Online 
//     //                             key={u.id} 
//     //                             user={u}
//     //                         />