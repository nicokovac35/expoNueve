import { createStore, combineReducers } from "redux"

import CategoryReducer from '../store/reducers/category.reducer'
import ProductReducer from '../store/reducers/products.reducer'

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    products: ProductReducer,
})


export default createStore (RootReducer)