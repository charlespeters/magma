import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Search from './components/Search'
import Slider from './components/Slider'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header title='Magma'>
          <Search />
        </Header>
        <div style={{ padding: 10 }}>
          <Slider name='range' label='Range Rover' />
        </div>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
