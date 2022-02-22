import React, { createContext, useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../App'
import Row from './Row'
import TableHeader from './TableHeader'
import ServerReq from '../../utils/ServerReq'
import { Link } from 'react-router-dom'
import { StyledUsersTable } from '../../styles/UsersTable.styled'
import { English } from '../../utils/dictionary'

export const UsersContext = createContext()

export default function UsersTable() {
    
    const [users, setUsers] = useState()
    const [error, setError] = useState('')
    const [language] = useContext(LanguageContext)
    const [render, setRender] = useState(true)
  
    useEffect(() => {
      getUsers()
    }, [])
  
    useEffect(() => {
      setError(language.getUsersError)
    }, [language])
  
    async function getUsers() {
      try {
        const res = await ServerReq('get', '/user?all=true')
        console.log(res);
        if (!res.success) {
          console.log(res);
          setError(language.getUsersError)
        }
        else setUsers(res.data)
      } catch (error) {
        console.log(error.response?.data?.error || error.message || error);
      }
    }

    async function deleteUser(id) {
      try {
        const res = await ServerReq('put', '/user/edit?del=true', {"id": id})
        if (!res.success) console.log(res);
        else getUsers()
      } catch (error) {
        console.log(error.response?.data?.error || error.message || error);
      }
    }
    
  
    
  
    return (
      // TODO: Error
        <StyledUsersTable ltr={language == English}>
            <tbody>
              <UsersContext.Provider value={[users, setUsers]}>

                <TableHeader/>

                {users && users.map((user, index) => {
                  return (
                    <Row key={user.id} user={user} index={index} delete={deleteUser} />
                    
                    )
                    
                  })}
              </UsersContext.Provider>
            </tbody>
        </StyledUsersTable>
    )
}
