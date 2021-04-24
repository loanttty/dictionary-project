import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary () {
	let [keyword, setKeyword] = useState('')
	let [results, setResults] = useState(null)

	function updateKeyword (e) {
		setKeyword(e.target.value)
	}

	function handleResponse (response) {
		setResults(response.data[0])
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
					<Result results={results}/>
			</div>
	)
}