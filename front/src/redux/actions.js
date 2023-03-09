import axios from 'axios'

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREASE_STOCK = 'INCREASE_STOCK';
export const REDUCE_STOCK = 'REDUCE_STOCK';
export const INCREASE_ALL_PRODUCT_STOCK = 'INCREASE_ALL_PRODUCT_STOCK';

export const getAllProducts = () => {
    return function (dispatch) {
        axios
            .get(`http://localhost:5000/api/products`)
            .then((response) => {
                return response.data;
            })
            .then((data) => dispatch({ type: GET_PRODUCTS, payload: data }))
            .catch((error) => console.log(error));
    }
};

export const getProductDetail = (id) => {
    return function (dispatch) {
        axios
            .get(`http://localhost:5000/api/products/${id}`)
            .then((resp) => dispatch({ type: GET_PRODUCT_DETAIL, payload: resp.data }))
    }
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });


export const delOneFromCart = (id) =>
    ({ type: REMOVE_ONE_FROM_CART, payload: id })


export const delAllFromCart = (id) =>
    ({ type: REMOVE_ALL_FROM_CART, payload: id })

export const clearCart = () => ({ type: CLEAR_CART });
