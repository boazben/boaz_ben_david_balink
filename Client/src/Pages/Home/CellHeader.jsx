import React from 'react'

export default function CellHeader({name, dbName, toSort, children, sort}) {
  return (
    <th onClick={() => toSort ? toSort(name, dbName) : ''}>
      <div>
        <span>{children}</span>
        <span>
          {
          sort?.name?.includes(name) ? sort.downToUp ? <i className="fas fa-long-arrow-alt-down"></i> : <i className="fas fa-long-arrow-alt-up"></i> : null
          } 
        </span>
      </div>
    </th>
  )
}
