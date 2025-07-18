import React from 'react'

const PostItem = ({title, description, onDelete}) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onDelete}>Delete</button>
        <button>Modify</button>
    </div>
  )
}

export default PostItem