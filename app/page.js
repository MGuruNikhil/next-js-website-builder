import { Toolbar, ItemTypes } from '../components/Toolbar'
import { useDrop } from 'react-dnd'
import Div from './div'


const Home = () => {
  const [divs, setdivs] = useState([])

  const handleEdit = (index, content) => {
    const updateddivs = [...divs]
    updateddivs[index].content = content
    setdivs(updateddivs)
  }
  
  const handleDelete = (index) => {
    const updateddivs = [...divs]
    updateddivs.splice(index, 1)
    setdivs(updateddivs)
  }

  const handleSave = () => {
    body = getElementById('body')
    console.log('saved divs:', body.innerHTML)
  }

  const [, drop] = useDrop(() => ({
    accept: [ItemTypes.TEXT, ItemTypes.IMAGE],
    drop: (item) => {
      setdivs([...divs, { type: item.type, content: item.type === 'text' ? 'new text' : 'image-url' }])
    },
  }))

  return (
    <div className="bg-black flex min-h-screen" id='body'>
      <Toolbar/>
      <div ref={drop} className="bg-blue-300 grow-[2] p-5 flex flex-col gap-2">
        {divs.map((div, index) => (
            <Div
              key={index}
              type={div.type}
              content={div.content}
              onEdit={(content) => handleEdit(index, content)}
              onDelete={() => handleDelete(index)}
            />
          ))}
      </div>
    </div>
  );
}
