import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

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
      <IfAuthenticated>
        <button className="button_1 white_link" onClick={handleSignOut}>
          Sign out
        </button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="button_1 white_link" onClick={handleSignIn}>
          Sign in
        </button>
      </IfNotAuthenticated>
    </>
  )
}

export default Nav
