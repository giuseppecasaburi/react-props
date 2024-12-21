import style from './AppMain.module.css';
import CardPost from './CardPost';
import posts from '../data/data';

function AppMain() {
    return (
        <>
            <div className={style.primo}>
                <section className='container'>
                    <div className="row row-cols-1 row cols-md-2 row-cols-lg-3 g-3">
                        {posts.map((currPost) => (
                            <div className="col" key={currPost.id}>
                                <CardPost title={currPost.title} content={currPost.content} image={currPost.image} tags={currPost.tags}/>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default AppMain;