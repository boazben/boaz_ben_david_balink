import React from 'react'
import { Link } from 'react-router-dom'

export default function AddUserButton() {
  return (
    <Link to='/add' >
      <button>+</button>
    </Link>
  )
}
