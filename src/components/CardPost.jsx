function CardPost ({title, image, content, tags, published}) {
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="Immagine dall'array" />
                <div className="card-body">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <p>{tags}</p>
                </div>
            </div>
        </div>
    )
} 

export default CardPost;