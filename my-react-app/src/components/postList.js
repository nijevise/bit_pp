import React from 'react'
import PostListItem from './postListItem'
import users from '../users'

const PostList = (props) => {
    return (
        <ul className="list">
            {
                users.map(user => <PostListItem id={user.id} title={user.title} body={user.body} />)
            }

        </ul>
    )
}

export default PostList