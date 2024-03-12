type myProps = {
    text: string,
    functionToExecute: () => void;
}

const ButtonFunction = (
    {
        text,
        functionToExecute 
    }: myProps) => {
    return (
        <button onClick={functionToExecute} type="button">{text}</button>
    )
}

export default ButtonFunction