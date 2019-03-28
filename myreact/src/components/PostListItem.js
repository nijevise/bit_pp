import React from 'react'
import post from '../post';


const PostListItem = (props) => {
    return (

        <li id={props.key}>

            <h3>
                {props.title}
            </h3>
            <p>
                {props.body}
            </p>
        </li>
    )
}
export default PostListItem