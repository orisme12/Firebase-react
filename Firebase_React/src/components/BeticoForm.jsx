import { useState } from "react"
import { saveTitle } from "../Firebase/Firebase";

export const BeticoForm = () => {
    const [itsTitle,setItsTitle] = useState('');
    const handleValueState = (event) =>{
      
      setItsTitle(event.target.value)
      console.log(itsTitle)
    }
    const handleSubmit = (event) =>{
      event.preventDefault()
      saveTitle(itsTitle)
    }
      return (
    <>
        <form onSubmit={handleSubmit}>
            <input
             type="text" 
             placeholder="¿Que Tarea vas a guardar hoy ?" 
             value={itsTitle}
             onChange={handleValueState}
             />
            <input type="submit" value="Guardar"/>
            <p>{itsTitle}</p>
        </form>
    </>
  )
}

