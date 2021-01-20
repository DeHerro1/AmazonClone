export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
);

export const initialState = {
    basket: [],
    user:null
};

const reducer = (state, action) => {
        switch(action.type) {
            case 'ADD_TO_BASKET':
                return {
                 ...state,
                basket: [...state.basket,action.item]
            };
            case 'REMOVE_FROM_BASKET':
                let newBasket = [...state.basket];
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
                if(index >= 0) {
                    newBasket.splice(index, 1);
                }else {
                    console.warn("there is a problem with your id naming");
                } 
                return {...state, basket: newBasket};
            case "USER_NAME":
                return {
                    ...state,
                    user: action.user
                }    
            default:
            return state;
    }
}

export default reducer;