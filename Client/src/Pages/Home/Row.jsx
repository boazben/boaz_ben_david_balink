import React from 'react'

export default function Row({user, index}) {
  return (
    <tr>
        <td >{index + 1}</td>
        <td >{user.firstName}</td>
        <td> {user.lastName}</td>
        <td> {user.phone}</td>
        <td>{user.age}</td>
        <td><i className="fas fa-trash"></i></td>
    </tr>
  )
}
