import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { LanguageContext } from '../../App'
import data from '../../utils/data'
import CellHeader from './CellHeader'
import { UsersContext } from './UsersTable'

export const FiledsContext = createContext()
export const SortContext = createContext()

export default function TableHeader({usersState}) {
    const [language] = useContext(LanguageContext)
    const [users, setUsers] = useContext(UsersContext)


    const [sort, setSort] = useState({
        name: "null",
        downToUp: true
      })

    const [fileds, setFileds] = useState(data.fieldsArray)

  
    function sorted(name, objName) {
      if(sort.name.includes(name)) {
        sort.downToUp ?
        setUsers(users => ([...users.sort((a, b) => (a[objName] > b[objName]) ? -1 : ((b[objName] > a[objName]) ? 1 : 0))]))
        : setUsers(users=> ([...users.sort((a, b) => (a[objName] > b[objName]) ? 1 : ((b[objName] > a[objName]) ? -1 : 0))]))
        
        setSort({
          name: name,
          downToUp: !sort.downToUp
        })

  
      } else {
        setUsers(users => ([...users.sort((a, b) => (a[objName] > b[objName]) ? 1 : ((b[objName] > a[objName]) ? -1 : 0))]))
        setSort({
          name: name,
          downToUp: true
        })
      }
    }


  return (
    <tr>
      <FiledsContext.Provider value={[fileds, setFileds]}>
        <SortContext.Provider value={sorted}>

          {
          fileds.map((filed, index) => {
            return (
              <CellHeader filed={filed} sort={sort} index={index} key={filed.dictionaryName}>
                {language[filed.dictionaryName]}
              </CellHeader>
                )
              })
            }
  
        </SortContext.Provider>
      </FiledsContext.Provider>
    </tr>
  )
}
