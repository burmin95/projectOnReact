import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.postData.map(el => <Post likeCount={el.likeCount} message={el.message} />)

  let newPostElement = React.createRef();

  let onPostChange = () => {
    props.updatePostText(newPostElement.current.value);
  }

  let addPost = () => {
    props.addPost();
  }

  return (
    <div className={s.BlockPost}>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  )
}
export default MyPosts;