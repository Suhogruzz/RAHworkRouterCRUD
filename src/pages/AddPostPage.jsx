import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_LOCAL_URL;

export default function AddPostPage() {
    const navigate = useNavigate();
    const [newPostText, setNewPostText] = useState('');
    const handleTextChange = ({ target }) => setNewPostText(target.value);
  
    const postNewPost = () => {
      if (!newPostText) {
        return;
      }
      axios.post(URL, { id: 0, content: newPostText })
        .then(() => {
          setNewPostText('')
          navigate('/')
        });
    };
  
    return (
      <>
        <div className='title'>Новая запись</div>
        <div className='addpost-block block'>
          <Link to='/'>
            <span className="material-icons addpost-close">X</span>
          </Link>
          <textarea className='addpost-textarea' rows="5" onChange={handleTextChange} value={newPostText}></textarea>
          <div className='btn' type='submit' onClick={postNewPost}>Отправить</div>
        </div>
      </>
    );
  }