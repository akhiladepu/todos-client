import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount, resetCount } from "../Redux/actions"
export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.count);
    return (<>
        <h2>Counter : {count}</h2>
        <button onClick={() => { dispatch(addCount(1)) }}>Add</button>
        <button onClick={() => { dispatch(subCount(1)) }}>Sub</button>
        <button onClick={() => { dispatch(resetCount()) }}>Reset</button>
    </>);
}