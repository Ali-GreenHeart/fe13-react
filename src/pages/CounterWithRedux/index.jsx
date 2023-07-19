import { connect } from "react-redux"

const CounterWithRedux = ({ dispatch, counter }) => {
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => dispatch({ type: 'inc' })}>+</button>
            <button onClick={() => dispatch({ type: 'dec' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>0</button>
        </>
    )
}

const mapStoreToProps = (store) => store;
export default connect(mapStoreToProps)(CounterWithRedux)
