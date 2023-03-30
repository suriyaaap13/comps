import React, { useReducer } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react';
import produce from 'immer';

export default function CounterPage() {

    const INCREMENT_VALUE = 'increment-value';
    const DECREMENT_VALUE = 'decrement-value';
    const ADD_VALUE = 'add-value';
    const SET_VALUE_TO_ADD = 'set-value-to-add';

    const reducer = (state, action)=>{
        switch(action.type){
            case INCREMENT_VALUE: 
                state.count = state.count + 1
                return;
            case DECREMENT_VALUE:
                state.count = state.count - 1;
                return;
            case ADD_VALUE:
                state.count = state.count + state.valueToAdd;
                state.valueToAdd = 0;
                return;
            case SET_VALUE_TO_ADD:
                state.valueToAdd = action.payload;
                return;
            default: return;
        }
        
    }

    const [state, dispatch] = useReducer(produce(reducer), {
        count: 0,
        valueToAdd: 0
    });

    console.log(state);

    const increment = () => {
        dispatch({
            type: INCREMENT_VALUE
        })
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
            <input type="number" value={state.valueToAdd||' '} onChange={handleChange} className='shadow w-52 focus:outline-none py-1 px-2 bg-gray-300'/>
            <Button type='submit' secondary outline className = 'mt-3' onClick={addValue}>Add it</Button>
        </form>
    </Panel>
  )
}
