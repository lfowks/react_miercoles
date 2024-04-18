import ButtonPrompt from "./components/ButtonPrompt"
import ButtonPrint from "./components/ButtonPrint"
import Title from "./components/Title"
import ButtonFunction from "./components/ButtonFunction"
import ComponenteA from "./ejercicios/ComponenteAB/ComponenteA";
import Counter from "./ejercicios/UseState/Counter";
import TestEffect from "./ejercicios/UseEffect/TestEffect";
import User from "./fetching/User";
import ListUsers from "./fetching/ListUsers";
import useTest from "./hooks/useTest";
import useGetAllProducts from "./hooks/useGetAllProducts";
import CounterWithHook from "./components/CounterWithHook";
function App() {

   const { products } = useGetAllProducts();

  const imprimir = (textToPrint = '') => {
    console.log(textToPrint);
  };

  const confirmPrompt = (textToPrompt = '') => {
    confirm(textToPrompt);
  };

  return (
    <>
      {/* <h1>Ejercicio Fetching</h1>

      <User/>

      <hr />

      <ListUsers/> */}

      <CounterWithHook/>

    </>
  )
}

export default App
