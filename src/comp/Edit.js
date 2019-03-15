import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import './Edit.css'



const Edit = props => {

	const [ user, setUser ] = useState(props.currentUser)



	const handleInputChange = event => {

		const { name, value } = event.target



		setUser({ ...user, [name]: value })

    }

    useEffect(

        () => {

          setUser(props.currentUser)

        },

        [ props ]

      )



	return (        

		<form

			

			onSubmit={event => {

				event.preventDefault()

				if(isNaN(user.username)){

					document.getElementById('er').innerHTML= 'Entrer un nombre'


				}else{

					document.getElementById('er').innerHTML = ''
					
					props.updateUser(user.id, user)

				}

				

			}}

		> 

  
		<div class="na">
			<input type="text" class="ka" name="username" value={user.username} onChange={handleInputChange} />

			<p id="er"></p>

			<button class="ma">OK</button>

			<button class="ni" onClick={() => props.setEditing(false)}>

				Annuler

			</button>
			</div>

		</form>

	)

}



export default Edit