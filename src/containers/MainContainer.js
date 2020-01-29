import React, { Component } from 'react'
import BranchA from '../components/BranchA'
import BranchB from '../components/BranchB'

export default class MainContainer extends Component {
    render() {
        return (
            <div>
                <BranchA />
                <BranchB />
            </div>
        )
    }
}
