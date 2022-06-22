import { useState } from 'react'
import Input from './common/Input'
import Select from './common/Select'
import { options } from '../data/subjects'

function CreateBook() {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [publisher, setPublisher] = useState();
    const [isbn, setIsbn] = useState();
    const [subject, setSubject] = useState();
    const [availability, setAvailability] = useState();
    const [numPages, setNumPages] = useState();
    const handleAuthor = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div className="container my-5">
            <Input
                label="Book Title"
                placeholder="Book Title"
                value={title}
            />
            <Input
                label="Book Author"
                placeholder="Book Author"
                value={author}
            />
            <Input
                label="Book Publisher"
                placeholder="Book Publisher"
                value={publisher}
            />
            <Input
                label="ISBN number"
                placeholder="ISBN number"
                value={isbn}
            />
            <Select
                label="Subject"
                value={subject}
                options={options}
            />
            <div className="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Availability</label>
                <div className="col-md-3">
                    <div className="form-check col-sm-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div class="form-check col-sm-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            No
                        </label>
                    </div>
                </div>
            </div>
            <Input
                label="Number of Pages"
                placeholder="Number of Pages"
                value={numPages}
            />
        </div>
    )
}



export default CreateBook;