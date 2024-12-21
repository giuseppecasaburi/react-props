import posts from "../data/data";

function ListTags({ posts }) {
    const newTagsArray = [];

    posts.forEach(currPost => {
        currPost.tags.forEach(currTag => {
            if (!newTagsArray.includes(currTag)) {
                newTagsArray.push(currTag)
            }
        })
    })

    return (
        <div className="tag-list">
            {newTagsArray.map((currTag, index) => (
                <span key={index} className={`badge rounded-pill mx-1 p-2 ${currTag}`}>{currTag}</span>
            ))}
        </div>
    );
}

export default ListTags;