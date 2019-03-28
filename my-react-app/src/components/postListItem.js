import React from 'react'

const PostListItem = (props) => {
    return (
        <li key={props.id}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </li>
    )
}

export default PostListItem