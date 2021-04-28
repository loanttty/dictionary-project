export default function Synonyms (props) {
    function handleOnClick (e) {
        e.preventDefault();
        props.clickSynonym(props.synonym);
    }

    return (
        <li className="synonymItem">
            <button className="synonymBtn" onClick={handleOnClick}>
                {props.synonym}
            </button>
        </li>
    )
}