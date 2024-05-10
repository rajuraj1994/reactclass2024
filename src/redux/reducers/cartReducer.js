const initialData = {
    cartcount: 0
}


const cartReducer = (state = initialData, action) => {
    // state store the initial value 
    // action means the function which operates to change the state

    switch (action.type) {
        case 'ADD_ITEM':
            return {
                cartcount: ++state.cartcount
            }
        
        case 'REMOVE_ITEM':
            return{
                cartcount:--state.cartcount
            }
            
        default: {
            return state
        }
    }

}

export default cartReducer
