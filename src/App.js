
import './App.css';
import MyRoute from './MyRoute';
// import cartReducer from './redux/reducers/cartReducer';
// import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
// provider is used to pass data from reducer to component
import store from './store';


function App() {
  // const store = legacy_createStore(cartReducer)
  return (
    <Provider store={store}>
      <MyRoute />
    </Provider>
  );
}

export default App;
