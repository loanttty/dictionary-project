import React from 'react'

export default function Meaning (props) {
    return (
        <div className='meaning-list'>
            <h4>{props.meaning.partOfSpeech}</h4>
            <ul className='definition-list'>
                {props.meaning.definitions.map((item, index) => (
                    <li key={index}>
                        <p><em>Definition: </em>{item.definition}</p>
                        {item.example ? 
                        (<p><em>Example: </em> {item.example}</p>) 
                        : null}
                        {item.synonyms ? 
                        (<p><em>Synonyms: </em> {item.synonyms.join('; ')}</p>) 
                        : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}