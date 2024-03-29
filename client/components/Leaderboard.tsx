import { useLeaderboard } from '../hooks/useLeaderboard'

export default function Leaderboard() {
  const { isPending, isError, data, error } = useLeaderboard()

  if (isPending) {
    return <p>Loading</p>
  }
  if (isError) {
    return <p>shit broke;{error.message}</p>
  }
  if (data) {
    return (
      <>
        <h1>Leaderboard</h1>
        {data.map((player) => (
          <div key={player.id}>
            <p>{player.name}</p>
            <p>{player.score}</p>
          </div>
        ))}
      </>
    )
  }
}
