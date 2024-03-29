import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getQuestions } from '../apis/questions.ts'

export function useQuestions() {
  return useQuery({ queryKey: ['questions'], queryFn: () => getQuestions() })
}

// export function useNextQuestion() {
//   const qc = useQueryClient()
//   const mutation = useMutation({
//     onSuccess: () => {
//       qc.invalidateQueries({ queryKey: ['fruits'] })
//     },
//   })
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
