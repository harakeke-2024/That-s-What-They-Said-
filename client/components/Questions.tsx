import { useEffect, useState } from 'react'
import * as api from '../apis/questions'
import { useQuestions } from '../hooks/useQuestions'
import answerKey from '../hooks/answerGen'
import { Question } from '../../models/question'
import daph from '../../Public/Audio/Daph.ogg'
import rich from '../../Public/Audio/rich.ogg'
import jared from '../../Public/Audio/Jared.ogg'
import hannah from '../../Public/Audio/hannah.ogg'

export default function Questions() {
  const [questionNum, setQuestionNum] = useState(0)
  const { isPending, isError, data, error } = useQuestions()

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
    setQuestionNum(1 + questionNum)
  }
  console.log(answerKey)

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
