import {useSelector, useDispatch} from 'react-redux';
import { counterAction } from '../store/index';

const LoginPage = () =>{
    const dispatch = useDispatch();
    const counter = useSelector(store=> store.counter);
    const incrementHandler = () =>{
        dispatch(counterAction.increment());
    }
    const increseHandler = () =>{
        dispatch(counterAction.increse(5));
    }
    const decrementHandler = () =>{
        dispatch(counterAction.decrement());
    }
    return (
        <>
        <div className="container">
            <p className="text-center">{counter}</p>            
            <p className="text-center">
                <button onClick={incrementHandler} className="btn btn-dark m-2">Increment</button>
                <button onClick={increseHandler} className="btn btn-dark m-2">Increment 5</button>
                <button onClick={decrementHandler} className="btn btn-dark m-2">Decrement</button>
            </p>
            <h1 className="text-center">Login</h1>
        </div>
        </>
    )
}
export default LoginPage;