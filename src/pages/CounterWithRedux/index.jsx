import { connect } from "react-redux"
import { actions } from "../../reducers/rootReducer";
const CounterWithRedux = ({ dispatch, counter }) => {
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => dispatch({ type: actions.inc })}>+</button>
            <button onClick={() => dispatch({ type: actions.dec })}>-</button>
            <button onClick={() => dispatch({ type: actions.reset })}>0</button>
            <button onClick={() => dispatch({ type: actions.special, payload: +prompt("enter your favorite number") })}>RAHIB  </button>
        </>
    )
}

const mapStoreToProps = (store) => store;
export default connect(mapStoreToProps)(CounterWithRedux)
