import React, { useState } from "react";
import axios from "axios";

export default function Dictionary () {
	let [keyword, setKeyword] = useState('')

	function updateKeyword (e) {
		setKeyword(e.target.value)
	}

	function handleResponse (response) {
		console.log(response)
	}

	function search (e) {
		e.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse)
	}
	return (
			<div className='dictionary'>
					<form onSubmit={search}>
						<input 
						type='search' 
						placeholder='Type a word'
						autoFocus={true}
						onChange={updateKeyword} />
					</form>
			</div>
	)
}