import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddPostPage from './pages/AddPostPage';
import SinglePostPage from './pages/SinglePostPage';
import EditPostPage from './pages/EditPostPage';
import './App.css'

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/posts/new' element={<AddPostPage />} />
          <Route path='/posts/:id' element={<SinglePostPage />} />
          <Route path='/edit/:id' element={<EditPostPage />} />
        </Routes>
      </Router>
    </div>
  );
}