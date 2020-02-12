import React from 'react';
import p from './Post.module.css'

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src='https://www.kinonews.ru/insimgs/2019/newsimg/newsimg91064.jpg' />
      {props.message}
      <div>
        <span>Like </span>
        {props.likeCount}
      </div>
    </div>
  )
}
export default Post;