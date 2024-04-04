import ButtonPrompt from "./components/ButtonPrompt"
import ButtonPrint from "./components/ButtonPrint"
import Title from "./components/Title"
import ButtonFunction from "./components/ButtonFunction"
import ComponenteA from "./ejercicios/ComponenteAB/ComponenteA";
import Counter from "./ejercicios/UseState/Counter";
import TestEffect from "./ejercicios/UseEffect/TestEffect";
import User from "./fetching/User";
import ListUsers from "./fetching/ListUsers";
function App() {

  const imprimir = (textToPrint = '') => {
    console.log(textToPrint);
  };

  const confirmPrompt = (textToPrompt = '') => {
    confirm(textToPrompt);
  };

  return (
    <>
      <h1>Ejercicio Fetching</h1>

      <User/>

      <hr />

      <ListUsers/>

    </>
  )
}

export default App
