import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import Edit from './comp/Edit'

import Usetab from './comp/Usetab'

import Addtab from './comp/Addtab'

import './App.css'



const App = () => {

  const usersData = [

  ]



  const [users, setUsers] = useState(usersData)

  const [count, setCount] = useState(0)

  

  const addUser = user => {

		user.id = count

		setUsers([ ...users, user ])

  }

  const deleteUser = id => {

    setUsers(users.filter(user => user.id !== id))

  }

  const [ editing, setEditing ] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }

  const [ currentUser, setCurrentUser ] = useState(initialFormState)



  const editRow = user => {

    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })

  }

  const updateUser = (id, updatedUser) => {

    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))

  }
  
  return (

    <div className="container">

      

        {editing ? (

          <div id="pop">

          <div id="po">

          <Edit

            editing={editing}

            setEditing={setEditing}

            currentUser={currentUser}

            updateUser={updateUser}

          />
          

          </div>

          </div>

          

          ):

          (

          <Addtab addUser={addUser} setCount={setCount} count={count}/>

    )}



          <Usetab users={users}  editRow={editRow} updateUser={updateUser}  deleteUser={deleteUser}/>



    </div>


            
  )

  

}



export default App
