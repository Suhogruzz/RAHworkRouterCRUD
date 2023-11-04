export default function Post({ post }) {
    return (
      <>
        <div className='post-text'>{post.content}</div>
        <div>
          <span className='bold'>Создан: </span>
          <span >{(new Date(post.created)).toLocaleString()}</span>
        </div>
      </>
    )
  }