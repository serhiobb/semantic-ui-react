import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './App'

import store from './store'

const render = (Component) => {
  ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
    document.getElementById('root')
  )
}

render(App)
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
