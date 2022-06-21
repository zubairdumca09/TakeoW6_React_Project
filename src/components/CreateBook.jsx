import { useState } from 'react'

function CreateBook({ name, author }) {
    const [title, setTitle] = useState();
    const [autor, setAutor] = useState();
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleAuthor = (e) => {
        setTitle(e.target.value)
    }
    return (
        <>
            <div style={{ margin: '10px' }}>
                <label>Book Title</label>
                <input className="input" onChange={handleTitle} value={title} />
            </div>
            <div style={{ margin: '10px' }}>
                <label>Book Author</label>
                <input className="input" onChange={handleAuthor} value={title} />
            </div>
            <div>
                Author: {author}
            </div>
        </>
    )
}



export default CreateBook;