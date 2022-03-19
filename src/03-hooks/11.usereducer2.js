import React, { useReducer, useContext } from 'react'

const initialState = {
  a: '11111',
  b: '11111'
}

const reducer = (prevstate, action) => {
  const newState = { ...prevstate }

  switch (action.type) {
    case 'change-a':
      newState.a = action.value
      return newState;
    case 'change-b':
      newState.b=action.value
      return newState
    default: 
    return prevstate

  }

}

const Globalcontext = React.createContext()

export default function App() {

  const [state, dipatch] = useReducer(reducer, initialState)

  return (
    <Globalcontext.Provider value={
      {
        state,
        dipatch
      }
    }>
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </div>
    </Globalcontext.Provider>

  )
}

function Child1() {
  const { dipatch } = useContext(Globalcontext)
  return <div style={{ background: 'pink' }}>
    <button onClick={()=>{dipatch({
      type: 'change-a',
      value: '22222'
    })}}> change a </button>

    <button onClick={()=>{dipatch({
      type:'change-b',
      value:'33333'
    })}}> change b </button>
  </div>
}

function Child2() {
  const { state } = useContext(Globalcontext)
  return <div style={{ background: 'aqua' }}>
    child2-{state.a}
  </div>
}

function Child3() {
  const { state } = useContext(Globalcontext)
  return <div style={{ background: 'gold' }}>
    child3-{state.b}
  </div>
}