function CardPost ({title, image, content, tags, published}) {
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="Immagine dall'array" />
                <div className="card-body">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div>
                        {tags.map((currTag, index) => (
                            <span key={index} className={`badge rounded-pill mx-1 p-2 ${currTag}`}>{currTag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default CardPost;