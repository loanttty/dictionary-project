
export default function Phonetics (props) {
    return (
        <div className='phonetics'>
            <ul>
                {props.phonetics.map((item, index) => (
                    <li key={index}>
                        <a href={item.audio} className="listenButton" target="_blank" rel="noreferrer">
                            <i className="fas fa-volume-up"></i>
                        </a>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}