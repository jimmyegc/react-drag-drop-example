import { useState } from 'react'
import './App.css'

function App() {
  const [widgets, setWidgets] = useState<string[]>([])

  const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData("widgetType", widgetType)
  }

  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    console.log('widgetType', widgetType)
    setWidgets([...widgets, widgetType])
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className='app'>
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
      <div className='page' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget, index) => (
          <div className='dropped-widget' key={index}>
            {widget}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
