import axios from "axios"
import ShoutoutModel from "../interfaces/ShoutoutModel"
const apiUrl =
	import.meta.env.VITE_API_URL + "/shoutouts"


export const getShoutouts = async (): Promise<
	ShoutoutModel[]
> => (await axios.get(apiUrl)).data

export const postShoutout = async (
	shoutout: ShoutoutModel
): Promise<ShoutoutModel[]> =>
	(await axios.post(apiUrl, shoutout)).data