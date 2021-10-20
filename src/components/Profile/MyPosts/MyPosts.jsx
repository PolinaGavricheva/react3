import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hello, my friend', likesCount: 11},
        {id: 2, message: 'I want to travel', likesCount: 12}
    ]
    let postsElements = posts.map( p => (
        <Post message={p.message} likesCount={p.likesCount}/>
    ))

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;