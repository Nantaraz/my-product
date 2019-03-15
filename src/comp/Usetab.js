import React from 'react'
import './Usetab.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 


const Usetab = props => (
  
  <div class="table-responsive ">
  <table class="table">
    <thead>
      <tr>
        <th class="bg bg-primary">Id</th>
        <th class="bg bg-primary">Produits</th>
        <th class="bg bg-primary">Prix</th>
        <th class="bg bg-primary">Actions</th>
      </tr>
    </thead>
    <tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr>
            <td>{user.id}</td>
						<td>{user.name[0].toUpperCase()+user.name.split("").splice(1).join("").toLowerCase()}</td>
						<td class="m">{user.username}</td>
						<td>
                

              <button class="btn btn-danger"  onClick={() =>confirmAlert({
                      customUI: ({ onClose }) => {
                        return (
                          <div>
                            <p>Suppréssion Produit</p>
                            <p>{user.name[0].toUpperCase()+user.name.split("").splice(1).join("").toLowerCase()}</p>
                            <button  onClick={() => {
                                props.deleteUser(user.id)
                                onClose()  
                                }} >OUI</button>
                            <button class="ma" onClick={onClose}
                            >NON</button>
                          </div>
                        )
                      }
                    })}>X
                  </button> 

              <button class="btn btn-success  x" onClick={()=> props.editRow(user)}
                      
                      
                  >Edit</button> 

						</td>
					</tr>
				))
			) : (
				<tr>
          
				</tr>
      )}
      
		</tbody>
  </table>
 

          <div class="q">
            <button class="btn btn-secondary" onClick={()=> {
              var s = 0 ;
            for (var i=0;i<props.users.length;i++)
            {
              s += parseInt(props.users[i].username);
              
            }
            let nanta = [s];
            var numberFormat = new Intl.NumberFormat("es-ES");
            var form = nanta.map(numberFormat.format)
            document.getElementById("sum").innerHTML = form.join(";");
            
          }} >TOTAL</button>

          </div>
          <div class="p">
          <h>TOTAL=<span id="sum">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Ar</h>
          </div> 
  </div>
)

export default Usetab