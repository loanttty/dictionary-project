import React from "react";
import Meaning from "./Meaning"
import Phonetics from "./Phonetics"

export default function Result (props) {
    if (props.results) {
        return (
            <div className="results">
                <section>
                    <h2>{props.results.word}</h2>
                    <Phonetics phonetics={props.results.phonetics} />
                </section>  
                {props.results.meanings.map((meaningItem,index) => 
                    <Meaning key={index} 
                        meaning={meaningItem} 
                        clickSynonym={(word) => props.clickSynonym(word)}/>)}
            </div>
        )
    } else {
        return null
    }
}