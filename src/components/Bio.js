import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={'yvogeldhof.jpg'}
          alt={`Yvo Geldhof`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Tech blog by <a href="https://twitter.com/yvogdev">Yvo Geldhof</a> - I
          write about game development & front-end development
        </p>
      </div>
    )
  }
}

export default Bio
