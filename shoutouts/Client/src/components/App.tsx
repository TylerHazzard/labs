import ShoutoutModel from "../interfaces/ShoutoutModel"
import { getShoutouts, postShoutout } from "../services/shoutoutService"
import "./App.css"
import AddShoutout from "./AddShhoutout"
import ShoutoutList from "./ShoutoutList"
import {
	signInWithGoogle,
	signOut
} from "../firebaseConfig"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useState, useEffect } from "react"

const App = () => {
	const [shoutouts, setShoutouts] = useState<
		ShoutoutModel[]
	>([])
	useEffect(() => {
		getShoutouts().then(shoutouts => setShoutouts(shoutouts))
	}, [])

	const { user } = useContext(AuthContext)

  const handleAdd = (shoutout: ShoutoutModel) => {
		postShoutout(shoutout).then(_ => {
			getShoutouts().then(shoutouts => setShoutouts(shoutouts))
		})
	}

	if (user) {
		return (
			<div className="app">
				<AddShoutout handleAdd={handleAdd} />
				<ShoutoutList shoutouts={shoutouts} />
				<button onClick={signOut}>Sign Out</button>
			</div>
		)
	}
	return (
		<>
			<h3>Please Login</h3>
			<button onClick={signInWithGoogle}>
				Sign in
			</button>
		</>
	)
}

export default App