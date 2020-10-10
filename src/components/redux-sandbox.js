import React from 'react';
import ContainedButtons from './button'
import { createStore } from 'redux'

export default function ReduxSandbox () {

  const reducer = (state = 5, action) =>{
    switch(action.type){
      case 'INC':
        return state +1;
      default:
        return state

    }
    return 0;
  }

  const store = createStore(reducer)
  store.subscribe(() => {
    console.log(store.getState())
  })

  store.dispatch({type:'INC'})
  store.dispatch({type:'INC'})
  store.dispatch({type:'INC'})
  store.dispatch({type:'INC'})



  return (
    <div>
      <h1>state: {store.getState()} </h1>

      <ContainedButtons
        text='Redux'
        color='secondary'
        variant="outlined"
        onClick={()=> console.log('JavaScript')}
      />
    </div>
  );
}
