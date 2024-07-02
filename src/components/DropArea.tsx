import { useState } from 'react'
import './DropArea.css'
export const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false)
  return (<>
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        setShowDrop(false);
        onDrop();
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`bg-blue-400 m-1 p-4 border-4 border-dotted 
        ${showDrop ? "drop_area" : "hide_drop"}`}
    >DropArea</div>
  </>)
}