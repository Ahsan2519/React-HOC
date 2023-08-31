import React, { Component } from 'react'
import GrnadChild from './GrnadChild'
import UserContext from './userContext'

export class SubChild extends Component {
    // this is 2nd method to use contextType
    static contextType = UserContext
  render() {
    return (
      <>
      <h1 className='child'>i'm contexttype from {this.context}</h1>
        <GrnadChild />
      </>
    )
  }
}

// SubChild.contextType = UserContext

export default SubChild
