import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>Salom</h1>
      </div>
    )
  }
}
App.propTypes = {}
export default App