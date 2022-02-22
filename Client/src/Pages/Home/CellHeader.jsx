import React from 'react'

export default function CellHeader({name, dbName, toSort, children, sort}) {
  return (
    <th onClick={() => toSort ? toSort(name, dbName) : ''}>
      {children}
      <span>
        {
        sort?.name?.includes(name) ? sort.downToUp ? <i className="fas fa-long-arrow-alt-down"></i> : <i className="fas fa-long-arrow-alt-up"></i> : null
        } 
      </span>
    </th>
  )
}
