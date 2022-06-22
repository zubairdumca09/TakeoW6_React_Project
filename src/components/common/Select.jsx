

function Select({ label, value, onChange, options }) {
    return (
        <div className="mb-3 row">
            <label for="subject" className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select {label}</option>
                    {options.map((item, index) => {
                        const { label, value } = item;
                        return <option key={index} value={value}>{label}</option>
                    })}
                </select>
            </div>
        </div>
    )
}
export default Select;

