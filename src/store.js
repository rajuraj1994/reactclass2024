
import cartReducer from './redux/reducers/cartReducer'
import studentReducer from './redux/reducers/studentReducer'
import productReducer,{singleProductReducer} from './redux/reducers/productReducer'
import { combineReducers,legacy_createStore,applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'


const reducers=combineReducers({
    cart:cartReducer,
    student:studentReducer,
    productsData:productReducer,
    product:singleProductReducer,
})

const store= legacy_createStore(reducers,applyMiddleware(thunk))

export default store 
