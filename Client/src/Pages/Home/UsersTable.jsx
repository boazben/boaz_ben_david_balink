import React, { createContext, useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../App'
import Row from './Row'
import TableHeader from './TableHeader'
import ServerReq from '../../utils/ServerReq'
import { Link } from 'react-router-dom'
import { StyledUsersTable } from '../../styles/UsersTable.styled'
import { English } from '../../utils/dictionary'

export const UsersContext = createContext()
export const FilterContext = createContext()

export default function UsersTable() {
    
    const [users, setUsers] = useState()
    const [usersToView, setUserToView] = useState()
    const [error, setError] = useState('')
    const [language] = useContext(LanguageContext)
    const [filter, setFilter] = useState([])

    useEffect(() => {
      if(users) {
        if(filter.length === 0){
          setUserToView([...users])
        } else {
           let  arr = [...users.filter(user => {
              let result = true
              for( let conditional of filter) {
                if (!String(user[conditional.name])?.includes(conditional.value)) {
                    result = false
                }
              }
              return result
              })]
          
          setUserToView([...arr])
        }
      }
    }, [users, filter])
  
    useEffect(() => {
      getUsers()
    }, [])
  
    useEffect(() => {
      setError(language.getUsersError)
    }, [language])
  
    async function getUsers() {
      try {
        const res = await ServerReq('get', '/user?all=true')
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
        <StyledUsersTable ltr={language == English}>
            <tbody>
              <UsersContext.Provider value={[users, setUsers]}>
                <FilterContext.Provider value={[filter, setFilter]}>


                <TableHeader/>

                {usersToView && usersToView.map((user, index) => {
                  return (
                    <Row key={user.id} user={user} index={index} delete={deleteUser} />
                    
                    )
                    
                  })}
                  </FilterContext.Provider>
              </UsersContext.Provider>
            </tbody>
        </StyledUsersTable>
    )
}
