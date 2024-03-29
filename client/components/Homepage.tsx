import Nav from './Nav'
import Questions from './Questions'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useState } from 'react'
import Leaderboard from './Leaderboard'
import { useAuth0 } from '@auth0/auth0-react'

export default function Homepage() {
  const [game, setGame] = useState(true)
  const { user, logout, loginWithRedirect } = useAuth0()

  return (
    <>
      <ul>
        <IfAuthenticated>
              <Questions />
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Nav />
        </IfNotAuthenticated>
      </ul>
    </>
  )
}
