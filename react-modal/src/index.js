import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
