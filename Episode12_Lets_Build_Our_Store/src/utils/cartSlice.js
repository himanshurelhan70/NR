import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "nhi btauga",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Vanilla(Older) Redux => Dont Mutate state
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState

            // Redux Toolkit => Either mutate the existing state or return a newState
            // redux toolkit is also doing the same thing behind the scene using a library (Immer)
            // Immer - finding the diff bw original and mutated state and gives you back the new Immutable state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },

        // originalState = {items: ["pizza"]}
        clearCart: (state) => {
            // console.log(state) cannot see the state directly
            // console.log(current(state)) use current to get the value of state

            // state = [] will not work, only updates the local state not the original
            // state.items.length = 0; works originalState = {items: []}
            return {items: []}; // it works too originalState = {items: []}
        }
    }
})

// Redux Dev Tools(extension) => For debugging and simulate the user's experience

console.log("cartSLice", cartSlice);
// {
//     actions : {
//         addItem
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer