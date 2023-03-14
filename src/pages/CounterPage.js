import React, { useReducer } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';


export default function CounterPage() {

    const INCREMENT_VALUE = 'increment-value';
    const DECREMENT_VALUE = 'decrement-value';
    const ADD_VALUE = 'add-value';
    const SET_VALUE_TO_ADD = 'set-value-to-add';

    const reducer = (state, action)=>{
        switch(action.type){
            case INCREMENT_VALUE: 
                return {
                    ...state,
                    count: state.count + 1
                };
            case DECREMENT_VALUE:
                return {
                    ...state,
                    count: state.count - 1
                }
            case ADD_VALUE:
                return {
                    ...state,
                    count: state.count + state.valueToAdd,
                    valueToAdd: 0
                };
            case SET_VALUE_TO_ADD:
                return {
                    ...state,
                    valueToAdd: action.payload
                };
            default: return state
        }
        
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        valueToAdd: 0
    });

    console.log(state);

    const increment = () => {
        dispatch({
            type: INCREMENT_VALUE
        })
        console.log("HEllo World");
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_VALUE
        })
    }

    const addValue = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_VALUE,
        });
        e.target.value = 0;
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

  return (
    <Panel>
        <div className='m-3'>
            Value of Count is {state.count}
        </div>
      
      <div className='flex my-3 mx-3'>
        <Button secondary outline className = 'mr-3' onClick={increment}>Increment</Button>
        <Button secondary outline className = 'mr-3' onClick={decrement}>Decrement</Button>
      </div>
        <form className='my-5 mx-3' onSubmit={addValue}>
            <div className='my-3'>Add More</div>
            <input type="number" onChange={handleChange} className='shadow w-52 focus:outline-none py-1 px-2 bg-gray-300'/>
            <Button type='submit' secondary outline className = 'mt-3' onClick={addValue}>Add it</Button>
        </form>
    </Panel>
  )
}
