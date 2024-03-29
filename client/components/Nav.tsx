import { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import Questions from './Questions.tsx'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()
  console.log(user?.name)

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  const handleSignIn = () => {
    loginWithRedirect()
    console.log('sign in')
  }

  return (
    <>
      <div className="container">
        <div id="content_container">
          <div id="content">
            <h3>Dev Academy</h3>
            <h1>Trivia Night</h1>
            <h4>Powered by Deez Nuts</h4>
            <IfNotAuthenticated>
              <button className="button_1 white_link" onClick={handleSignIn}>
                Sign in
              </button>
            </IfNotAuthenticated>
            <IfAuthenticated>
              <button className="button_1 white_link" onClick={handleSignOut}>
                Sign out
              </button>
              {user && <p>Signed in as: {user?.nickname}</p>}
            </IfAuthenticated>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
