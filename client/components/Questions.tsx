import { useEffect, useState } from 'react'
import * as api from '../apis/questions'
import { useQuestions } from '../hooks/useQuestions'
import answerKey from '../hooks/answerGen'
import { useQueryClient } from '@tanstack/react-query'

export default function Questions() {
  // const [lock, setLock] = useState(true)
  const [questionNum, setQuestionNum] = useState(1)
  const { isPending, isError, data, error } = useQuestions(questionNum)

  function handleClick(e) {
    // const qc = useQueryClient()
    // e.preventdefault()
    if (e.target.id == answer) {
      console.log('correct')
    } else {
      console.log('incorrect')
    }
    setQuestionNum(questionNum++)
    // qc.invalidateQueries['questions']
  }
  console.log(answerKey)

  const answer = answerKey[questionNum - 1]

  if (isPending) {
    return <p>Loading</p>
  }
  if (isError) {
    return <p>shit broke;{error.message}</p>
  }
  if (data) {
    return (
      <>
        <div className="questions-container">
          <div className="questions-content-container">
            <div className="Question-Box">
              <h1>{data.question}</h1>
              <h3>{data[answer]}</h3>
            </div>
            <button
              onClick={handleClick}
              className="Answer-button"
              id="Answer-1"
            >
              <h3 id="jared">Jared</h3>
            </button>
            <button
              onClick={handleClick}
              className="Answer-button"
              id="Answer-2"
            >
              <h3 id="daph">daph</h3>
            </button>
            <button
              onClick={handleClick}
              className="Answer-button"
              id="Answer-3"
            >
              <h3 id="hannah">Hannah</h3>
            </button>
            <button
              onClick={handleClick}
              className="Answer-button"
              id="Answer-4"
            >
              <h3 id="rich">Rich</h3>
            </button>
          </div>
        </div>
      </>
    )
  }
}
