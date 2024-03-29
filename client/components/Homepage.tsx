import Nav from './Nav'
import Questions from './Questions'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Homepage() {
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
