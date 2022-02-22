import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import serverReq from '../../utils/ServerReq'
import { UsersContext } from './UsersTable'

export default function Row({user, index}) {
  const navigate = useNavigate()
  const [users, setUsers] = useContext(UsersContext)

  async function deletUser() {
    try {
      const res = await serverReq('put', '/user/edit?del=true', user)
      if (!res.success) {
        console.log(res)
        return;
      }
      
      setUsers(users.filter(userObj => user.id !== userObj.id))
 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <tr>
        <td onClick={() => navigate(`/edit/${user.id}`)}>{index + 1}</td>
        <td onClick={() => navigate(`/edit/${user.id}`)}>{user.firstName}</td>
        <td onClick={() => navigate(`/edit/${user.id}`)}> {user.lastName}</td>
        <td onClick={() => navigate(`/edit/${user.id}`)}> {user.phone}</td>
        <td onClick={() => navigate(`/edit/${user.id}`)}>{user.age}</td>
        <td onClick={deletUser}><i className="fas fa-trash"></i></td>
    </tr>
    
  )
}
