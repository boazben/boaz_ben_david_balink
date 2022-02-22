import React, { useContext, useEffect, useRef, useState } from 'react'
import { LanguageContext } from '../../App'
import CellHeader from './CellHeader'
import { UsersContext } from './UsersTable'

export default function TableHeader({usersState}) {
    const [language] = useContext(LanguageContext)
    const [users, setUsers] = useContext(UsersContext)
    const [sort, setSort] = useState({
        name: "null",
        downToUp: true
      })

    const fields = useRef([
        {
            dictionaryName: "num",
            fieldDbName: "",
            toSort: false,
        },
        {
            dictionaryName: "firstName",
            fieldDbName: "firstName",
            toSort: true,
        },
        {
            dictionaryName: "lastName",
            fieldDbName: "lastName",
            toSort: true,
        },
        {
            dictionaryName: "phone",
            fieldDbName: "phone",
            toSort: true,
        },
        {
            dictionaryName: "age",
            fieldDbName: "age",
            toSort: true,
        },
        {
            dictionaryName: "delete",
            fieldDbName: "",
            toSort: false,
        },
    ])

  
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
        {
            fields.current.map(cell => {
                return (
                    <CellHeader name={cell.dictionaryName} dbName={cell.fieldDbName} toSort={cell.toSort ? sorted : ''} sort={sort} key={cell.dictionaryName}>
                        {language[cell.dictionaryName]}
                    </CellHeader>
                )
            })
        }
  
    </tr>
  )
}
