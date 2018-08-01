
import { React, Component }from "react";

import { connect } from 'react-redux'
import { addTodo } from '../actions'

export class ArtistsListRedux extends Component {
    handleArtistClick  = ()  => {
    const { increment, id } = this.props
    increment(id)
    }

    handleAddChildClick = e => {
        e.preventDefault()

        const { addChild, createNode, id } = this.props
        const childId = createNode().nodeId
        addChild(id, childId)
    }
}



