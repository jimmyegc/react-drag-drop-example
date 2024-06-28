import { useState } from 'react'
import './App.css'

function App() {
  const [widgets, setWidgets] = useState([])

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType)
  }

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData('widgetType')
    console.log('widgetType', widgetType)
    setWidgets([...widgets, widgetType])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h2>Drag and drop</h2>
      <div className='widgets'>
        <div className='widget' draggable
          onDragStart={(e) => handleOnDrag(e, "Widget A")}>Widget A
        </div>
        <div className='widget' draggable
          onDragStart={(e) => handleOnDrag(e, "Widget B")}>Widget B
        </div>
        <div className='widget' draggable
          onDragStart={(e) => handleOnDrag(e, "Widget C")}>Widget C
        </div>
      </div>
      <div className='page' onDrop={handleOnDrop} onDragOver={handleDragOver}
        style={{ border: 'solid 1px #000' }}
      >
        Wid
        {widgets.map((widget, index) => (
          <div className='dropped-widget' key={index}>
            {widget}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
