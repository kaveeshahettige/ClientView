import React from 'react'

const Home = () => {
    const username = localStorage.getItem('username') || 'Guest';
  return (
    <div>
      Welcome, {username}!
    </div>
  )
}

export default Home
