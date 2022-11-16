import React, { ChangeEvent, FormEvent, useState , useEffect} from 'react'
import { Video } from './Video';
import * as VideoService from './VideoService'
import {toast} from 'react-toastify'

// para que redireccione a otra página
import { useHistory , useParams } from 'react-router-dom'


interface Params {
  id:string;
}



const VideoForm = () => { 

    const history = useHistory();
  const params = useParams<Params>();
console.log(params);

    const initialState = {
      title:"",
      description: "",
      url: "",  
    }


  // GUARDARLO EN LOS INPUTS DEL FORM
 const [video, setVideo]= useState<Video>(initialState);

//COGER LOS DATOS DEL INPUT
const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
  setVideo({...video,[e.target.name]: e.target.value})
}

// Pulsar el boton (GUARDAR)
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!params.id) {
  await VideoService.createVideos(video);
  toast.success('Nuevo Video agregado');
  setVideo(initialState)
  }else {
    await VideoService.updateVideo(params.id, video)
  }


   history.push('/');
}

// obtencion de un video (Mediante el Back)
  const getVideo = async (id: string) => {
    const res = await VideoService.getVideo(id);
    const { title , description , url } = res.data;
    setVideo({title, description, url});
  }

  useEffect(() => {
    if (params.id)
    getVideo(params.id)
  }, [])

  return (
    <div className='row'>

        <div className='col-md-4 offset-md-4'>
            <div className='card'>
                <div className='card-body'> 
                    <h3>Añadir video:</h3>
                     <form onSubmit={handleSubmit}>
                        <div className='form-group '>
                            <input
                            type="text"
                            name="title"
                            placeholder='Escribe un Titulo para el Video'
                            className='form-control'
                            onChange={handleInputChange}
                            value={video.title}
                            autoFocus
                            />
                        </div>

                        <div className="form-group mt-2">
                          <input
                          type="text"
                          name="url"
                          placeholder='https://somesite.com'
                          className='form-control'
                          onChange={handleInputChange}
                          value={video.url}
                          />
                        </div>
                        <div className="form-group mt-2">
                          <textarea name="description" 
                          rows={3} 
                          className="form-control" 
                          placeholder='Escribe una descripción'
                          onChange={handleInputChange} 
                          value={video.description}
                          >
                          </textarea>
                        </div>

                          {
                            params.id ?
                          <button  className='btn btn-dark mt-2' type='submit'>
                                  Actualizar Video
                          </button>
                            :
                            <button  className='btn btn-dark mt-2' type='submit'>
                            Crear Video
                            </button>
                          }
                      </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default VideoForm