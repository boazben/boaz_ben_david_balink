import React, { useContext, useEffect, useRef, useState } from 'react'
import { LanguageContext } from '../../App'
import CellHeader from './CellHeader'
import { UsersContext } from './UsersTable'

export default function TableHeader({usersState, rend}) {
    const [language] = useContext(LanguageContext)
    const [users, setUsers] = usersState
    const [render, setRender] = rend;
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
        setUsers(users.sort((a, b) => (a[objName] > b[objName]) ? -1 : ((b[objName] > a[objName]) ? 1 : 0)))
        : setUsers(users.sort((a, b) => (a[objName] > b[objName]) ? 1 : ((b[objName] > a[objName]) ? -1 : 0)))
        
        setSort({
          name: name,
          downToUp: !sort.downToUp
        })

        setRender(!render)
  
      } else {
        setUsers(users.sort((a, b) => (a[objName] > b[objName]) ? 1 : ((b[objName] > a[objName]) ? -1 : 0)))
        setSort({
          name: name,
          downToUp: true
        })
        setRender(!render)
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
