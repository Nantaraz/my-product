import React, { useState } from 'react'
import "./Addtab.css"
import 'bootstrap/dist/css/bootstrap.min.css'
const Addtab = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return
				if (!isNaN((user.username))) 
				props.addUser(user)
				props.setCount(props.count+1)
				setUser(initialFormState)
			}}
		>
		<div class="n">
			<label> Produit</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label class="s">Prix</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<label>Ar</label>
			<button class="btn btn-primary mian" onClick={()=>{isNaN(user.username)? document.getElementById("mi").innerHTML="Entrer un nombre":document.getElementById("mi").innerHTML="" }}
			>Ajouter</button>	
		</div>
		<div id="mi" class="nan">
		</div>
		</form>
	)
}

export default Addtab