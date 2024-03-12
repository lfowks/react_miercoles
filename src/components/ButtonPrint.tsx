

const ButtonPrint = ({ text = '', textToPrint = '' }) => {

    const imprimir = () => {
        console.log(textToPrint);
    };

    return (
        <button onClick={imprimir} type="button">{text}</button>
    )
}

export default ButtonPrint