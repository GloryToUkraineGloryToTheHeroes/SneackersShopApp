import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/reducer/rootReducer'



const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)


reportWebVitals()