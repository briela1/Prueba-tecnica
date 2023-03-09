import { GET_PRODUCTS, GET_PRODUCT_DETAIL, CLEAN_DETAIL, ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, CLEAR_CART, INCREASE_STOCK, REDUCE_STOCK, INCREASE_ALL_PRODUCT_STOCK } from "./actions";

const initialState = {
    products: [],
    productDetail: {},
    cart: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload,
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                productDetail: {},
            };
        case ADD_TO_CART:
            {
                let newItem = state.products.find(
                    (product) => product._id === action.payload

                );
                console.log(newItem)
                let itemInCart = state.cart.find(
                    (item) => item._id === newItem._id
                )
                return itemInCart ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === newItem._id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item),

                }
                    : {
                        ...state,
                        cart: [...state.cart, { ...newItem, quantity: 1 }]
                    }
            };
        case REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item._id === action.payload);
            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item._id !== action.payload),
                }
        };
        case REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload),
            }
                ;

        case INCREASE_STOCK:
            return {
                ...state,
                products: state.products.map((item) =>
                    item._id === action.payload
                        ? { ...item, countInStock: item.countInStock + 1 }
                        : item)
            };
        case INCREASE_ALL_PRODUCT_STOCK:
            {
                const newProducts = [...state.products];
                action.payload.map(item => { newProducts.map(p => { if (p._id === item.id) { p.countInStock += item.quantity }; return null; }); return null; })
                return {
                    ...state,
                    products: [...newProducts]
                };
            };

        case REDUCE_STOCK:
            return {
                ...state,
                products: state.products.map((item) =>
                    item._id === action.payload
                        ? { ...item, countInStock: item.countInStock - 1 }
                        : item)
            };
        case CLEAR_CART:
            return initialState;
        default:
            return { ...state };
    }
};

export default rootReducer;