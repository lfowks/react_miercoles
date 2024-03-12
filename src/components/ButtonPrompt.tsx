
const ButtonPrompt = ({ text = '', textToPrint = '' }) => {

    const confirmPrompt = () => {
        confirm(textToPrint);
    };

    return (
        <button onClick={confirmPrompt} type="button">{text}</button>
    )
}

export default ButtonPrompt