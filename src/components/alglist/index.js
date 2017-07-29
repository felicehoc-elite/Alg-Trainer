import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as AlgActions  from '../../actions/algs'

class AlgList extends Component {
  componentDidMount() {
    let { match: {params: matchParams} } = this.props
    this.props.watchSet(matchParams.set)
  }

  componentWillUnmount() {
    this.props.unwatchSet()
  }

  render() {
    let { match: {params: matchParams} } = this.props

    return <div className="container">
      <h1>{matchParams.set.toUpperCase()}</h1>
      {
        this.props.algs.collection.map(alg => {
          return <span key={alg.case}>{alg.case}</span>
        })
      }
    </div>
  }
}

const mapStateToProps = (state) => {
  return { algs: state.algs }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchSet: (set) => {
      dispatch(AlgActions.watchSet(set))
    },
    unwatchSet: () => {
      dispatch(AlgActions.unwatchSet())
    }
  }
}

AlgList = connect(mapStateToProps, mapDispatchToProps)(AlgList)
export default withRouter(AlgList)
