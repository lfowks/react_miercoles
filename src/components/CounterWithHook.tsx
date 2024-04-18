import useCounter from "../hooks/useCounter"

const CounterWithHook = () => {

const {value, increment, decrement} = useCounter()

  return (
    <div style={{display:'flex', gap: '16px'}}>

        <button onClick={decrement}>-</button>
        <strong>{value}</strong>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default CounterWithHook