import axios from 'axios';
import React, { useEffect, useState } from 'react'
// Importacion de Video (Interface)
import { Video } from './Video'

// importacion de la peticion a la API
import * as VideoService from './VideoService';

import VideoItem from './VideoItem'


const VideoList = () => {
//* =======================================================
//* ==== GUARDAMOS LOS DATOS QUE ESTÁN DENTRO DEL GET ===
//* =======================================================

        // Definir estado dentro del componente
        const [videos, setVideos] = useState<Video[]>([])


//* =======================================================
//* ==== PARA CONSUMIR LOS DATOS DE LA API ===
//* =======================================================

    const loadVideos = async () => {
    const res = await VideoService.getVideos();

     const formatedVideos = res.data.map(video => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
          updateAt: video.updatedAt ? new Date(video.updatedAt): new Date()
        }
      })
      .sort((a,b) => b.createdAt.getTime()-a.createdAt.getTime())

      setVideos(formatedVideos);


    // .data => es porque sale en el console (dato 
    // donde se almacenan los datos de GET )
    setVideos(res.data);
    }

    // const loadVideos = async() => {
    //   const res = await axios.get('http://localhost:4000/videos')
    //   setVideos(res.data);
    // }
//---------------------------------------------------------
    useEffect(() => {
       loadVideos();
    }, [])
  //* =======================================================




  return (
    <div className='row'>
       {videos.map((video) => {
         return <VideoItem video={video} key={video._id} loadVideos={loadVideos} />

        // <div>
        //  {/* IMPRIME LOS NOMBRES (TITULOS) DE LA BBDD  */}
        //  <h1>{video.title}</h1> 
        // </div>
       })}
    </div>
  )
}

export default VideoList