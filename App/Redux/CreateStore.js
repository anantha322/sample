import { createStore, applyMiddleware, compose } from 'redux'
import Logger from 'redux-logger'
import Rehydration from '../Services/Rehydration'
import ReduxPersist from '../Config/ReduxPersist'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  middleware.push(Config.reduxLogging ? Logger : null)

  const sagaMiddleware = createSagaMiddleware({})
  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
