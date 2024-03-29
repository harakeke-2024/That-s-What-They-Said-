export interface Question {
  id: number
  question: string
  type: string
  daph: string
  hannah: string
  jared: string
  rich: string
}

export interface Leaderboard {
  id: number
  name: string
  score: number
}

export interface Board {
  name: string
  score: number
}
