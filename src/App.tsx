import ButtonPrompt from "./components/ButtonPrompt"
import ButtonPrint from "./components/ButtonPrint"
import Title from "./components/Title"
import ButtonFunction from "./components/ButtonFunction"
import ComponenteA from "./ejercicios/ComponenteAB/ComponenteA";
import Counter from "./ejercicios/UseState/Counter";
import TestEffect from "./ejercicios/UseEffect/TestEffect";
function App() {

  const imprimir = (textToPrint = '') => {
    console.log(textToPrint);
  };

  const confirmPrompt = (textToPrompt = '') => {
    confirm(textToPrompt);
  };

  return (
    <>
      <Title />
      <ButtonPrint text="Imprimir" textToPrint="Imprime" />
      <ButtonPrompt text="Prompt" textToPrint="Muestra Prompt" />

      <ButtonFunction
        text="Button Function Imprimir"
        functionToExecute={() => imprimir("Button Function Imprimir")}
      />

      <ButtonFunction
        text="Button Function Prompt"
        functionToExecute={() => confirmPrompt("Button Function Prompt")}
      />

      <ComponenteA textToShow={'HOLA'}/>

      <h1>Ejercicio Contador</h1>

      <Counter/>

      <TestEffect/>
    </>
  )
}

export default App
