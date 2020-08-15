export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'Add_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

            case 'Remove_from_BASKET':
                // Logic for removing item from basket
                return {state}

            default:
                return state;
    }
};

export default reducer;