import { Question } from '../../models/question.ts'
import db from './connection.ts'

export async function getQuestionAnswer(id: number): Promise<Question[]> {
  return db('questions').select().where({ id }).first()
}

export async function getLeaderboard() {
  return db('leaderboard').select()
}

export async function addLeaderboard(player: { name: string; score: number }) {
  return db('leaderboard').insert(player)
}
