import { useState } from 'react'
import './App.css'
import { DropArea } from './components/DropArea'
import React from 'react'
import { Original } from './Original'


function App() {

  const [activeCard, setActiveCard] = useState('')
  const [widgets, setWidgets] = useState<string[]>([])

  const handleOnDrag = (widgetType: string) => {
    //e.dataTransfer.setData("widgetType", widgetType)
    setActiveCard(widgetType)
  }

  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    setWidgets([...widgets, widgetType])
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const onDrop = (e, position) => {
    if (widgets.length === 0) {
      setWidgets([...widgets, activeCard])
    } else {
      console.log('--- onDrop ---', position)
      console.log(`${activeCard} is going to place at the position ${position}`)
      if (activeCard == null || activeCard === undefined) return
      //setWidgets([...widgets, activeCard])
      const cardToMove = widgets[activeCard]
      //alert(cardToMove)
      const updatedCards = widgets.filter((task, index) => index !== activeCard)
      updatedCards.splice(position, 0, activeCard)
      setWidgets(updatedCards)
    }

  }

  return (<>
    <Original />
    {/* <div className='app flex'>
      <pre>
        active : {JSON.stringify(activeCard)}
        widgets: {JSON.stringify(widgets)}
      </pre>
      <br />

      <div className='bg-blue-300 p-4 border-2 rounded-xl w-1/4'>
        <div className='widget' draggable
          onDragStart={(e) => handleOnDrag("Widget A")}
          onDragEnd={() => setActiveCard(null)}
        >Widget A
        </div>
        <div className='widget' draggable
          onDragStart={(e) => handleOnDrag("Widget B")}
          onDragEnd={() => setActiveCard(null)}
        >Widget B
        </div>
        <div className='widget' draggable
          onDragStart={(e) => handleOnDrag("Widget C")}
          onDragEnd={() => setActiveCard(null)}
        >Widget C
        </div>
      </div>
      <div className='w-1/2 bg-slate-300 border-2 rounded-xl h-screen'
        onDragOver={handleDragOver}
        onDrop={(e) => onDrop(e, widgets.length + 1)}
      >
        {widgets.length === 0 && <DropArea onDrop={(e) => onDrop(e, 0)} />
        }
        {widgets.map((widget, index) => (
          <React.Fragment key={index}>
            <div className='dropped-widget'
              key={index}
              draggable="false"
            >
              {widget}
            </div>
            <DropArea onDrop={(e) => onDrop(e, index + 1)} />
          </React.Fragment>
        ))}
      </div>
    </div> */}
  </>
  )
}

export default App
