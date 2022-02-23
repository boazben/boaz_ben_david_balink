import React, { useContext } from 'react'
import { StyledInput } from '../../styles/Input.styled'
import { FilterContext } from './UsersTable'

export default function Filter({filed}) {
  const [filter, setFilter] = useContext(FilterContext)

  function changeFilter(e) {
      const res = filter.find((conditional, index) => {
        if (conditional.name === filed.dictionaryName) {
          filter.splice(index, 1, {name: conditional.name, value: e.target.value})
          return true;
        }
      })
      if (!res) {
        setFilter([...filter, {name: filed.dictionaryName, value: e.target.value}])
      } else {
        setFilter([...filter])
      }
     
  }

  return (
    <StyledInput noBorder={true}
      width={filed.SearchWidth}
    >
      <input 
      onChange={e => changeFilter(e)}
      type="text" 
      />
    </StyledInput>
  )
}
