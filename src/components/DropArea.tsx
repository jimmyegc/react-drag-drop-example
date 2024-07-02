import { useState } from 'react'
import './DropArea.scss'
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
      className={`${showDrop ? "drop_area" : "hide_drop"}`}
    >Coloque el componente aquí</div>
  </>)
}