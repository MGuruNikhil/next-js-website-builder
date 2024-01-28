import React from 'react'
import { useDrag } from 'react-dnd'

const ItemTypes = {
    TEXT: 'text',
    IMAGE: 'image',
  }  

const DraggableItem = ({ type }) => {
    const [, drag] = useDrag(() => ({
      type,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }))
  
    return <div ref={drag}>{type}</div>
  }
  

const Toolbar = () => {
  return (
<div className="bg-red-300 grow-[1] p-5 flex flex-col gap-2">
<DraggableItem type={ItemTypes.TEXT} className="bg-black text-white text-center py-2 codeblock" />
<DraggableItem type={ItemTypes.IMAGE} className="bg-green-300 text-black text-center py-2 codeblock"/>
</div>
  )}

  export { Toolbar, ItemTypes }