import React from 'react'

export default function Meaning (props) {
    console.log(props.meaning)
    return (
        <div className='meaning-list'>
            <h4>{props.meaning.partOfSpeech}</h4>
            <ul className='definition-list'>
                {props.meaning.definitions.map((item, index) => (
                    <li key={index}>
                        <p>{item.definition}</p>
                        {item.example ? 
                        (<p>Example: {item.example}</p>) 
                        : null}
                        {item.synonyms ? 
                        (<p>Synonyms: {item.synonyms.join('; ')}</p>) 
                        : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}