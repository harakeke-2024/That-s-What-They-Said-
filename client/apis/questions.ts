import request from 'superagent'
import { Question } from '../../models/question'

const rootUrl = '/api/v1'

export async function getQuestions(): Promise<Question> {
  return request.get(rootUrl + `/questions/`).then((res) => {
    return res.body
  })
}
