import React from 'react'
import styled from 'styled-components'

const HelloWorldCSS = styled.div`
  color: #000;
  font-size: 32px;
  font-weight: 300;
`

export default class HelloWorld extends React.Component {

  render () {
    return (
      <HelloWorldCSS>
        Hello World
      </HelloWorldCSS>
    )
  }
}