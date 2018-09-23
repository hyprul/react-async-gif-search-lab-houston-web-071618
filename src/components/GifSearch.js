// import React, { Component } from 'react';

// export default class GifSearch extends Component {

// 	state = {
// 		query: ''
// 	}

// 	handleSubmit = event => {
// 		event.preventDefault()
// 		debugger
// 		this.props.fetchGIFs(this.state.query)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<form onSubmit={this.handleSubmit}>
// 					<input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})}/>
// 				</form>
// 			</div>
// 		)
// 	}
// }
import React, { Component } from 'react'

class GifSearch extends Component {

	constructor(props) {
    super(props);
    this.handleSubmit= this.handleSubmit.bind(this); 

    this.state = {
       query: ""
    }
	}

  handleSubmit = (event) => {
  	//debugger
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }

}

export default GifSearch