import Nav from './Nav'
import Questions from './Questions'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useState } from 'react'
import Leaderboard from './Leaderboard'

export default function Homepage() {
  const [game, setGame] = useState(true)
  return (
    <>
      <ul>
        <IfAuthenticated>
          {game ? <Questions /> : <Leaderboard />}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Nav />
        </IfNotAuthenticated>
      </ul>
      <button onClick={() => setGame(!game)}>end</button>
    </>
  )
}
