import { configureStore } from "@reduxjs/toolkit";


import pokeReducer from '../Reducers/Reducers';


const Store = configureStore({
    reducer: {
        poke: pokeReducer
    }
})

export default Store;