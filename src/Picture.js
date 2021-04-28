export default function Picture (props) {
    if (props.pictures && props.pictures.length > 0 ) {
        return (
            <section className="pictureList">
                <div className="row">
                    {props.pictures.map((pic,index) => (
                        <div className="col-3" key={index}>
                            <a href={pic.src.original} className="pictureLink" target="_blank" rel="noreferrer">
                                <img src={pic.src.tiny} className="img-fluid picture" alt="ref"/>
                            </a> 
                        </div>
                    ))}
                </div>
            </section>
        )
    } else {
        return null
    }
}