import TableRow from './TableRow'
function TableBody({ books }) {
    return (
        <>
            {books?.map((book) => {
                return <TableRow key={book.id} book={book} />
            })

            }
        </>
    )
}

export default TableBody;