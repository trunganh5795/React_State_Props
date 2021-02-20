import React, { Component } from 'react'

export default class TestLifeCycle extends Component {

    constructor() {
		super()
		this.state = { 
			labelCounter: 1, 
		}
	}


	componentDidMount() {		  			
		for (let i = 0; i < 10; i++) {
			this.setState({ labelCounter:this.state.labelCounter + 1 })
				
			console.log(this.state.labelCounter) // this.statelabelCounter = 1
            console.log('didmount')
		}
	}
	

    render() {
        console.log('render',this.state.labelCounter)

        return (
            
            <div>
                    <h1>Hello</h1>
                {this.state.labelCounter}
            </div>
        )
    }
}
