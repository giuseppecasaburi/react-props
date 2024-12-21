import style from './AppMain.module.css';

function AppMain() {
    return (
        <>
            <div className={style.primo}>
                <div className={`container d-flex justify-content-center`}>
                    <div className="card" style={{ width: "25rem" }}>
                        <img
                            src="https://placehold.co/600x400"
                            className="card-img-top"
                            alt="descrizione immagine"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Titolo del post</h5>
                            <p className="card-text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur saepe odio aut, necessitatibus cum obcaecati ducimus inventore minus ex eveniet eius. Error nihil aperiam porro sit itaque hic iure.
                            </p>
                            <a href="#" className="btn btn-primary">Leggi di più</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AppMain;