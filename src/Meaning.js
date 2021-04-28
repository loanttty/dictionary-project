import React from 'react';
import Synonyms from "./Synonyms"

export default function Meaning (props) {
    return (
        <div className='meaning-list'>
            <section>
                <h4>{props.meaning.partOfSpeech}</h4>
                    {props.meaning.definitions.map((item, index) => (
                        <li key={index}>
                            <div className="definition">{item.definition}</div>
                            {item.example ? 
                            (<div className="example">{item.example}</div>) 
                            : null}
                            {item.synonyms ? 
                            (<ul> {item.synonyms.map((synonym,index) => 
                                <Synonyms   key={index} 
                                            synonym={synonym} 
                                            clickSynonym={(word) => props.clickSynonym(word)}/>)}</ul>) 
                            : null}
                        </li>
                    ))}
            </section>
        </div>
    )
}