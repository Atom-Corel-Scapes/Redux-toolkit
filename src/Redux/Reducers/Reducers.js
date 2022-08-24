import { createSlice } from '@reduxjs/toolkit';

const pokeReducer = createSlice({
    name: 'pokeReducer',
    initialState: {
        data: [{id:'1', name: 'Bulpasar'
    }]
    },
    reducers: {
        addPoke: (state, payload) => {
            state.data.push(payload.payload)
        }
    }
});

    
export const {addPoke} = pokeReducer.actions;

export default pokeReducer.reducer;