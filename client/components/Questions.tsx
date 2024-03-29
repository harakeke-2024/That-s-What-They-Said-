import { useState } from 'react'
import { useQuestions } from '../hooks/useQuestions'
import { useAddLeaderboard } from '../hooks/useLeaderboard'
import answerKey from '../hooks/answerGen'
import { Question } from '../../models/question'

import { Link, useNavigate } from 'react-router-dom'

export default function Questions() {
  const [questionNum, setQuestionNum] = useState(0)
  const [score, setScore] = useState(0)
  const { isPending, isError, data, error } = useQuestions()
  const addBoard = useAddLeaderboard()
  const navigate = useNavigate()

  function handleClick(e) {
    const buttons = document.querySelectorAll(
      '.Answer-button',
    ) as NodeListOf<HTMLButtonElement>

    const correctAnswer = answer.toLowerCase()
    const clickedAnswer = e.target.innerHTML.toLowerCase()

    buttons.forEach((button) => {
      if (button.innerHTML.toLowerCase() === correctAnswer) {
        button.style.borderColor = '#78D870'
      }
    })

    buttons.forEach((button) => {
      if (button.innerHTML.toLowerCase() !== correctAnswer) {
        button.style.borderColor = '#FF0000'
      }
    })

    const isCorrect = clickedAnswer === correctAnswer

    if (isCorrect) {
      e.target.style.borderColor = '#78D870'
      setScore(1 + score)
      console.log('correct')
    } else {
      buttons.forEach((button) => {
        if (button.innerHTML.toLowerCase() === correctAnswer) {
          button.style.borderColor = '#78D870'
        }
      })
      console.log('incorrect')
    }

    setTimeout(() => {
      buttons.forEach((button) => {
        button.style.borderColor = ''
      })
    }, 1000)
    if (questionNum < 9) {
      setQuestionNum(1 + questionNum)
    } else {
      const playerData = { name: 'Blank', score: score }
      addBoard.mutate(playerData)
      console.log(score)
      navigate('/leaderboard')
    }
  }

  const answer = answerKey[questionNum]

  function questionOut(data: Question[]) {
    switch (data[questionNum].type) {
      case 'text':
        return <h3>{data[questionNum][answer]}</h3>
      case 'sound':
        return (
          <audio
            controls
            src={`../../Public/Audio/${data[questionNum][answer]}`}
          />
        )
      case 'image':
        return (
          <img
            src={`../../Public/Images/${data[questionNum][answer]}`}
            alt={data[questionNum][answer]}
          />
        )
    }
  }

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
              <h1>{data[questionNum].question}</h1>
              {
                questionOut(data)
                /* {<h3>{data[questionNum][answer]}</h3>} */
              }
            </div>
            <button
              onClick={handleClick}
              className="Answer-button"
              id="Answer-1"
              key="jared"
            >
              Jared
            </button>
            <button
              onClick={handleClick}
              className="Answer-button"
              id="Answer-2"
              key="daph"
            >
              daph
            </button>
            <button
              onClick={handleClick}
              className="Answer-button"
              key="hannah"
              id="Answer-3"
            >
              Hannah
            </button>
            <button
              onClick={handleClick}
              className="Answer-button"
              key="rich"
              id="Answer-4"
            >
              Rich
            </button>
          </div>
        </div>
      </>
    )
  }
}
