import React from 'react';
import { Video } from './Video';
import ReactPlayer from 'react-player'
import './VideoItem.css'
import { useHistory } from 'react-router-dom'
import * as VideoService from './VideoService'


interface Props {
    video: Video
    loadVideos: () => void;
  }
  
  
  const  VideoItem = ({video, loadVideos}: Props) => {
      const history = useHistory();

      const handleDelete = async (id: string) =>  {
          await VideoService.deleteVideo(id)
          loadVideos();
      }

    return (
      <div  className="col-md-4 p-5">

        <div className="card card-body video-card m-3" 
        style={{cursor:'pointer'}} 
       >

          <div className="d-flex justify-content-between">
            {/* IMPRIME LOS NOMBRES (TITULOS) DE LA BBDD  */}

            <h1
             onClick={() => history.push(`/update/${video._id}`)}
            >{video.title}</h1> 

            <span className='text-danger' 
            onClick={() => video._id && handleDelete(video._id)}>
            X
            </span>
          </div>  

            <p>{video.description}</p>

            <div className="ratio ratio-16x9">
               <ReactPlayer url={video.url} 
               width='100%'
               height='100%' />
            </div>
        
        </div>


      </div>
    )
  }
  
  export default VideoItem
  
  
  