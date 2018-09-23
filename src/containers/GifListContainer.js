import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

	state = {
		gifs: []
	}

	componentDidMount() {
		this.fetchGIFs();
	};


	fetchGIFs = (query = "wolf of wall street") => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
			.then(response => response.json())
			.then(({data}) => {
				this.setState({
					//debugger
					gifs: data.map( gif => ({url: gif.images.original.url}))
				})
		})

			//debugger
	}

	// fetchGIFs = (query = "dolphins") => {
	//     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
	//       .then(res => res.json())
	//       .then(({data}) => {
	//         this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
	//       })
 //  	}

	render() {
		return (
			<div>
				< GifSearch fetchGIFs={this.fetchGIFs}/>
				< GifList gifs={this.state.gifs}/>
			</div>
		)
	}
}