import request from 'superagent'
import { Leaderboard, Question } from '../../models/question'

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
