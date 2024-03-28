import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Homepage() {
  return (
    <>
      <div className="container">
        <div id="content_container">
          <div id="content">
            <h3>Dev Academy</h3>
            <h1 id="title">Trivia Night</h1>
            <h4>Powered by Deez Nuts</h4>
            <ul>
              <li>
                <Nav />
              </li>
              <li>
                <button className="button_2">Play as Guest</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
