import request from 'superagent'
import { Board, Leaderboard, Question } from '../../models/question'

const rootUrl = '/api/v1'

export async function getQuestions(): Promise<Question> {
  return request.get(rootUrl + `/questions/`).then((res) => {
    return res.body
  })
}

export async function getLeaderboard(): Promise<Leaderboard[]> {
  return request.get(rootUrl + `/leaderboard/`).then((res) => {
    return res.body as Leaderboard[]
  })
}

export async function addLeaderboard(data: Board) {
  return request.post(rootUrl + `/leaderboard/`).send(data)
}
