import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

// reducers
import loginReducer from './reducers/loginReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore (
  combineReducers({
    loginReducer
  }),
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)