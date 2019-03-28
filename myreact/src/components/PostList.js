import React from 'react'
import Posts from '../post.js'
import PostListItem from './PostListItem'


const PostList = (props) => {
    return (
        <ul>
            {
                Posts.map(post => {
                    return (
                        <PostListItem title={post.title} body={post.body} key={post.id} />
                    )
                })
            }

        </ul>

    )
}

export default PostList