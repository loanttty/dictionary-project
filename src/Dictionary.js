import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Picture from "./Picture";

export default function Dictionary () {
	let [keyword, setKeyword] = useState(null)
	let [results, setResults] = useState(null)
	let [pictures, setPictures] = useState(null)
	let [meaningError, setMeaningError] = useState(false) 
	// if true, the dictionary api caught error, do not proceed to display image and clear previous search result
	
	function updateKeyword (e) {
		setKeyword(e.target.value)
	}

	function handleResponse (response) {
		setResults(response.data[0])
		setMeaningError(false)
	}

	function handlePicturesResp (response) {
		setPictures(response.data.photos)
	}

	function search (keyword) {
		if (keyword) {
			let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
			axios.get(apiUrl)
				 .then(handleResponse)
				 .catch(() => {
					alert(`Cannot find the meaning of "${keyword}". Please try other word.`)
					setMeaningError(true)
				})
			
			const pexelsAPIKey = "563492ad6f91700001000001d54daba3a8c44132abf2c32dee427794";
			const header = { Authorization: `Bearer ${pexelsAPIKey}`};
			let pexelsAPIUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
			axios.get(pexelsAPIUrl, {headers: header}).then(handlePicturesResp)
		}
	}

	function handleClickOnSynonym (newWord) {
		setKeyword(newWord)
		search(newWord)
	}

	return (
			<div className='dictionary'>
				<section>
					<strong>What word do you want to look up?</strong>
					<form onSubmit={(e) => {
						e.preventDefault();
						search(keyword)}}>
						<input 
						type='search' 
						placeholder='Type a word'
						autoFocus={true}
						value={keyword ? keyword : ''}
						onChange={updateKeyword} />
					</form>
					<div className='hint'>
						suggested word: water, fall, spring
					</div>
				</section>
					{meaningError ? null : <Result results={results} clickSynonym={handleClickOnSynonym}/>}
					{meaningError ? null : <Picture pictures={pictures} />}
			</div>
	)
}