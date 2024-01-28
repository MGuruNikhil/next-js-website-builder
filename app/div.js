import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Toolbar'

const Div = ({ type, content, onEdit, onDelete }) => {
  const [, drop] = useDrop(() => ({
    accept: [ItemTypes.TEXT, ItemTypes.IMAGE],
    drop: (item) => {
        // puku naaku
    },
  }))

  return (
    <div ref={drop}>
      {type === 'text' && (
        <div contentEditable onInput={(e) => onEdit(e.currentTarget.innerText)}>
          {content}
        </div>
      )}
      {type === 'image' && <img src={content} alt="image" />}
      <button onClick={onDelete}>delete</button>
    </div>
  )
}

export default Div
