import React from 'react';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import VideoPlayer from '../../components/videoplayer/VideoPlayer'
import "./home.css";
import { googleAPIKey } from "../../components/keys/Keys";
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';

import Videocomments from '../../components/videocomments/Videocomments';
import VideocommentsForm from '../../components/videocomments/VideocommentsForm';
import Reply from '../../components/reply/Reply';
import ReplyForm from '../../components/reply/ReplyForm';




export default function Home(props) {

    const [videos, setVideos] = useState([]);
    const [videoId, setVideoId] =useState('NT299zIk2JY');
    const [search, setSearch] = useState('dog');
    const tokenFromStorage = localStorage.getItem('token');
    const[relatedVideos, setrelatedVideos] = useState([]);
    const[comment, setComment] = useState('');
    const[comments, setComments] = useState([]);
    const[replies, setReplies] = useState([]);
    const[reply, setReply] = useState('');
    const[repliedtocomment, setRepliedtocomment] = useState('');
    let token = localStorage.getItem('token');
    
    

    


    

    useEffect(() => {
        getRelatedVideos();
        getComments(); 
        createComment();
        getReplies();
        }, [videoId])

    async function searchVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${googleAPIKey}&maxResults=25&type=video`)
        setVideos(response.data.items)
        setVideoId(response.data.items[0].id.videoId)
        console.log(response.data.items)

    }

    async function getRelatedVideos() {
        // console.log(googleAPIKey)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&key=${googleAPIKey}&maxResults=25&type=video`)
        setrelatedVideos(response.data.items)
    }

    async function createReply(replyText) {
        
        
        
        let newReply = {
            
            comment: comment.id,
            text: replyText,
            
            

        }
        console.log(newReply)
        const jwt = localStorage.getItem('token');
        let response = await axios.post('http://127.0.0.1:8000/api/comments/create/reply/', newReply, {headers: {Authorization: 'Bearer ' + jwt}})
        setReply(response.data)
        // console.log(response.data)
        // getReplies();
        console.log(reply)
    }

    async function getReplies() {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/replies/${comment}/`)
        setReplies(response.data)
        console.log(replies)
        
    
      }

    async function getComment(videoId) {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}}/`)
        setRepliedtocomment(response.data)
        console.log(response.data)

    }


    async function getComments() {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${videoId}/`);
        setComments(response.data) 
        // console.log(response.data) 
    }

    async function createComment(commentText) {
        let newComment = {
            video_id: videoId,
            text: commentText,
            likes: 0,
            dislikes: 0,
        }
        console.log(newComment)
        const jwt = localStorage.getItem('token');
        let response = await axios.post('http://127.0.0.1:8000/api/comments/create/', newComment, {headers: {Authorization: 'Bearer ' + jwt}})
        setComment(response.data)
        console.log(response.data)
        getComments();
    }

   
    return (
        <>
            
            <Topbar searchVideos={searchVideos} search={search} token={token} setSearch={setSearch}/>
            <div className="homeContainer">
                {!props.user ?
                <Navigate to='/login/' replace={true}></Navigate> :
                <>
                <VideoPlayer videoId={videoId}/>
                <Feed/>
                <RightBar videoId={videoId} relatedVideos={relatedVideos} setVideoId={setVideoId}/>
                <Videocomments comments={comments}/>
                <VideocommentsForm createComment={createComment}/>
                <Reply reply={reply}/>
                <ReplyForm createReply={createReply}/>
                </>
                }  
            </div>    
          

        </>
    );
}
