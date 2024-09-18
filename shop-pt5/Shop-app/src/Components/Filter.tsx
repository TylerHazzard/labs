import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Filter = () => {
	const [maxPrice, setMaxPrice] = useState<
		number | undefined
	>(undefined)
	const [limit, setLimit] = useState<
		number | undefined
	>(undefined)
	const [includes, setIncludes] = useState<
		string | undefined
	>(undefined)
	const navigate = useNavigate()

	const filterProducts = () => {
		let url = "/products?"
		const query: any = {}
		if (maxPrice) query.maxPrice = maxPrice
		if (limit) query.limit = limit
		if (includes) query.includes = includes
		const queryParams = new URLSearchParams(query)
		navigate(url + queryParams)
	}

	return (
		<>
			<label htmlFor="max-price">Max Price: </label>
			<input
				id="max-price"
				type="number"
				value={maxPrice}
				onChange={e => setMaxPrice(+e.target.value)}
			/>
			<label htmlFor="limit">Limit: </label>
			<input
				id="limit"
				type="number"
				value={limit}
				onChange={e => setLimit(+e.target.value)}
			/>
			<label htmlFor="includes">Max Price: </label>
			<input
				id="includes"
				type="text"
				value={includes}
				onChange={e => setIncludes(e.target.value)}
			/>
			<button onClick={filterProducts}>
				Filter Products
			</button>
		</>
	)
}
export default Filter