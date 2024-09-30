import { useState, FC } from "react"
import ShoutoutModel from "../interfaces/ShoutoutModel"

interface Props {
    handleAdd: (shoutout: ShoutoutModel) => void
}

const AddShoutout: FC<Props> = ({ handleAdd }) => {
    const [to, setTo] = useState("")
    const [from, setFrom] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = () => {
		const newPlace: ShoutoutModel = {
			to,
            from,
            text
		}
		setTo("")
        setFrom("")
        setText("")
		handleAdd(newPlace)
	}

    return (
        <div>
            <form action="submit">
                <label htmlFor="to">To:</label>
                <input type="text" id="to" onChange={e => setTo(e.target.value)} value={to} />
                <label htmlFor="from">From:</label>
                <input type="text" id="from" onChange={e => setFrom(e.target.value)} value={from} />
                <label htmlFor="text">Message:</label>
                <input type="text" id="text" onChange={e => setText(e.target.value)} value={text} />
                <button type="submit" onClick={handleSubmit}>SHOUTOUT</button>
            </form>
        </div>
    )
}

export default AddShoutout