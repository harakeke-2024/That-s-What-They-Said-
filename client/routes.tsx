import { createRoutesFromElements, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import Leaderboard from './components/Leaderboard'
import Questions from './components/Questions'
import Layout from './components/Layout'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="/Questions" element={<Questions />} />
    <Route path="/leaderboard" element={<Leaderboard />} />
  </Route>,
)
