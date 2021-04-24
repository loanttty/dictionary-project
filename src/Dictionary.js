import React, { useState } from "react"

export default function Dictionary () {

		let [keyword, setKeyword] = useState('')

		function updateKeyword (e) {
			setKeyword(e.target.value)
		}

		function search (e) {
			e.preventDefault()
			alert(`Searching for ${keyword}`)
		}
    return (
        <div className='dictionary'>
            <form onSubmit={search}>
							<input 
							type='search' 
							placeholder='Type a word'
							autofocus={true}
							onChange={updateKeyword} />
						</form>
        </div>
    )
}