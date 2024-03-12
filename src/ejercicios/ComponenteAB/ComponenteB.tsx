const ComponenteB = (
  {
    textToShow,
    setMyText
  }: 
  {
    textToShow: string,
    setMyText: (text: string) => void
  }) => {

  const actualizar = () => {
    setMyText('HOLA 2');
  };

  return (
    <div>
        <h2>{textToShow}</h2>
        <button type="button" onClick={actualizar}>Cambiar</button>
    </div>
  )
}

export default ComponenteB