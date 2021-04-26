
export default function Phonetics (props) {
    console.log(props)
    return (
        <div className='phonetics'>
            <ul>
                {props.phonetics.map((item, index) => (
                    <li key={index}>
                        {item.text}
                        <a href={item.audio} target="_blank" rel="noreferrer">Listen</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}