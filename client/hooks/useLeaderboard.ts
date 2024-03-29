import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { addLeaderboard, getLeaderboard } from '../apis/questions.ts'
import { Board } from '../../models/question.ts'

export function useLeaderboard() {
  return useQuery({
    queryKey: ['leaderboard'],
    queryFn: () => getLeaderboard(),
  })
}

export function useAddLeaderboard() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: Board) => addLeaderboard(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['leaderboard'] })
    },
  })
}
