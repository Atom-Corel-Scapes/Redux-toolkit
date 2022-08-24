import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {addPoke} from './Redux/Reducers/Reducers'

function App() {

    let {data} = useSelector((state) => state.poke);
    let dispatch = useDispatch();
    console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPoke({id:2, name: e.target.elements[0].value}))
        e.target.elements[0].value = ' '
    }
  return (
    <div>
        {
            data.length > 0 && data.map((poke) => (
                <div>

                <span>{poke.name}</span><br></br>
                </div>
            ))
        }
        <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>Add poke</button>
        </form>

    </div>
  )
}

export default App