import { Link } from "react-router-dom";
import PostsList from "../components/MainPageComponents/PostsList";

export default function MainPage() {
    return (
      <>
        <div className='mainpage-add-block block'>
          <Link to='/posts/new' className='add-block-add-btn btn'>Новый пост</Link>
        </div>
        <PostsList />
      </>
    );
  }