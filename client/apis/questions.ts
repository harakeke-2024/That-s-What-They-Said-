import request from 'superagent'
import { Question } from '../../models/question'

const rootUrl = '/api/v1'

export async function getQuestions(id: number): Promise<Question> {
  return request.get(rootUrl + `/questions/${id}`).then((res) => {
    return res.body
  })
}
