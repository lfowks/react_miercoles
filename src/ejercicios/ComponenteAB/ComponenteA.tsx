import { useState } from "react";
import ComponenteB from "./ComponenteB"

const ComponenteA = ({textToShow}: {textToShow: string}) => {

  const [myText, setMyText] = useState(textToShow);

  return (
    <div>
        <h1>{myText}</h1>
        <ComponenteB textToShow={myText} setMyText={setMyText}/>
    </div>
  )
}

export default ComponenteA