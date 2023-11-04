import { Link, useParams, useNavigate, } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_LOCAL_URL;

export default function EditPostPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [content, setContent] = useState('')
  
    useEffect(() => {
      axios.get(URL)
        .then(res => setContent(res.data.find(p => Number(p.id) === Number(id)).content))
    }, [id]);
  
    const handleTextChange = ({ target }) => setContent(target.value);
  
    const postEditedPost = () => {
      if (!content) {
        return;
      }
      axios.put(`${URL}` + `/${id}`, { id, content })
        .then(() => {
          setContent('')
          navigate(`/posts/${id}`)
        });
    };
  
    return (
      <>
        <div className='title'>Редактирование поста</div>
        <div className='addpost-block block'>
          <Link to={`/posts/${id}`}>
            <span className="material-icons addpost-close">X</span>
          </Link>
          <textarea className='addpost-textarea' rows="5" onChange={handleTextChange} value={content}></textarea>
          <div className='btn' onClick={postEditedPost}>Отправить</div>
        </div>
      </>
    );
  }