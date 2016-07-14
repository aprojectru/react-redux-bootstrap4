import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'
import configureStore from './core/store'
import Root from './core/root'

/*eslint-disable */
import 'bootstrap-css'
/*eslint-enable */

addLocaleData(en)
addLocaleData(it)
const store = configureStore()
const rootEl = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./core/root', () => {
    /*eslint-disable */
    const NextRoot = require('./core/root').default;
    /*eslint-enable */
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
