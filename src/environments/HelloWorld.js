import React from 'react'
import styled from 'styled-components'
import Grid from 'grid-styled'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const HelloWorldCSS = styled.div`
  display: flex;
  color: #000;
  font-size: 33px;
  font-weight: 300;
`

const StaticWidth = styled.div`
  background: blue;
  display: inline-block;
  min-width: 225px;
`

const RightSide = styled.div`
  width: 100%;
  background: red;
`

class HelloWorld extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      posts: React.PropTypes.array,
    }).isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpexted error occured</div>)
    }

    return (
      <HelloWorldCSS>
        <StaticWidth>
          {this.props.data.posts[0].id}
        </StaticWidth>
        <RightSide>
          <Grid sm={1/2}>
            Half width
          </Grid>
          <Grid sm={1/2}>
            Half width
          </Grid>
        </RightSide>
      </HelloWorldCSS>
    )
  }
}

const PostQuery = gql`
  query PostQuery {
    posts {
      id
      title
      author {
        id
      } 
    }
  }`


const HelloWorldWithData = graphql(PostQuery)(HelloWorld)

export default HelloWorldWithData