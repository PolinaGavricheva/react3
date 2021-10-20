import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://f12.pmo.ee/sijcoaPD1kJH3fx4mSqGsHVT1Rg=/685x685/filters:focal(500x95:829x416)/nginx/o/2021/01/15/13577892t1h66e8.jpg"/>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
