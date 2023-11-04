import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "../components/MainPageComponents/Post";

const URL = import.meta.env.VITE_LOCAL_URL;

export default function SinglePostPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [post, setPost] = useState(null)
  
    useEffect(() => {
      axios.get(URL)
      .then(res => setPost(res.data.find(p => Number(p.id) === Number(id))))
    }, [id]);
  
    const onDelete = () => {
      axios.delete(`${URL}/${id}`)
        .then(() => navigate('/'))
    }
  
    const html = <>
      <Link to='/' className='link-normalizer'>
        <div className='post-back'>&lt; Назад</div>
      </Link>
      <div className='block'>
        <Post post={post} />
        <div className='post-buttons'>
          <div className='btn mr-3'>
            <Link to={`/edit/${id}`} className='link-normalizer'>
              Редактировать
            </Link>
          </div>
          <div className='btn btn-del' onClick={onDelete}>Удалить</div>
        </div>
      </div>
    </>
  
    return (
      <>
        { post && html }
      </>
    );
  }
