import { useState } from 'react'
import './App.css'
import React from 'react'
import { DropArea } from './components/DropArea'

export const Original = () => {
  const [widgets, setWidgets] = useState<string[]>([])

  const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData("widgetType", widgetType)
  }

  const handleOnDrop = (e: React.DragEvent, position: number) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    if (position == 0) {
      if (widgets.length > 0) {
        const copyWidgets = [...widgets]
        copyWidgets.splice(position, 0, widgetType)
        setWidgets(copyWidgets)
      } else {
        console.log('handleOnDrop', widgetType, position)
        setWidgets([...widgets, widgetType])
      }
    } else {
      console.log('position', position)
      const copyWidgets = [...widgets]
      copyWidgets.splice(position, 0, widgetType)
      setWidgets(copyWidgets)
    }

  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    // console.log('handleDragOver')
  }

  const handleDragEnd = () => {
    // console.log('handleDragEnd')
  }

  const onDrop = (status, position) => {
    console.log('onDrop ', status, position)
  }

  return (
    <div className='container mx-auto flex bg-slate-50 p-4 rounded-3xl'>
      <div className='p-4 bg-blue-100 widgets'>
        <div className='widget' draggable
          onDragEnd={handleDragEnd}
          onDragStart={(e) => handleOnDrag(e, "Widget A")}>Widget A
        </div>
        <div className='widget' draggable
          onDragEnd={handleDragEnd}
          onDragStart={(e) => handleOnDrag(e, "Widget B")}>Widget B
        </div>
        <div className='widget' draggable
          onDragEnd={handleDragEnd}
          onDragStart={(e) => handleOnDrag(e, "Widget C")}>Widget C
        </div>
      </div>
      <div className='page bg-blue-200 w-2/4'

        onDragOver={handleDragOver}
      >
        <div onDrop={(e) => handleOnDrop(e, 0)} >
          <DropArea onDrop={{}} />
        </div>
        {/* <div
          className='bg-blue-200 p-4 m-1 border-4 border-dotted'
          onDrop={(e) => handleOnDrop(e, 0)}>Drop zone</div> */}
        {widgets.map((widget, index) => (
          <React.Fragment key={index}>
            <div className='dropped-widget border-2' key={index} draggable>
              {widget}
            </div>

            <DropArea onDrop={{}} />

            {/* <div
              className='bg-blue-200 p-2 m-1 border-4 border-dotted'
              onDrop={(e) => handleOnDrop(e, index + 1)}>Drop zone {index + 1}</div> */}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
