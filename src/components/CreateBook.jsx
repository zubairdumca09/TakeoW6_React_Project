import { useState } from 'react'
import Input from './common/Input'
import Select from './common/Select'
import RadioInput from './common/RadioInput'
import { options } from '../data/subjects'
import { availibilityOptions } from '../data/availability'
import { postData } from '../api'
import { POST_BOOK } from '../api/urls'

function CreateBook() {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [publisher, setPublisher] = useState();
    const [isbn, setIsbn] = useState();
    const [subject, setSubject] = useState();
    const [availability, setAvailability] = useState();
    const [numPages, setNumPages] = useState();

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handlePublisher = (e) => {
        setPublisher(e.target.value)
    }
    const handleIsbn = (e) => {
        setIsbn(e.target.value)
    }
    const handleSubject = (e) => {
        setSubject(e.target.value)
    }
    const handleAvailability = (e) => {
        setAvailability(e.target.value)
    }
    const handleNumPages = (e) => {
        setNumPages(e.target.value)
    }
    const doPostData = () => {
        const data = {
            title, author, subject, isbn, numPages, publisher, availability
        }
        postData(POST_BOOK, data).then(() => {
            alert("Books saved successfully")
        })
    }
    return (
        <div className="container my-5">
            <Input
                label="Book Title"
                placeholder="Book Title"
                value={title}
                onChange={handleTitle}
            />
            <Input
                label="Book Author"
                placeholder="Book Author"
                value={author}
                onChange={handleAuthor}
            />
            <Input
                label="Book Publisher"
                placeholder="Book Publisher"
                value={publisher}
                onChange={handlePublisher}
            />
            <Input
                label="ISBN number"
                placeholder="ISBN number"
                value={isbn}
                onChange={handleIsbn}
            />
            <Select
                label="Subject"
                value={subject}
                options={options}
                onChange={handleSubject}
            />
            <RadioInput
                label="Availibility"
                options={availibilityOptions}
                onClick={handleAvailability}
            />
            <Input
                label="Number of Pages"
                placeholder="Number of Pages"
                value={numPages}
                onChange={handleNumPages}
            />
            <div className="mb-3 row">
                <div className="col-md-3 offset-md-2">
                    <button className="btn btn-primary" onClick={doPostData}>Save Book</button>
                </div>
            </div>
        </div>
    )
}



export default CreateBook;