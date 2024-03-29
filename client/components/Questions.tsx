import { useEffect, useState } from 'react'
import * as api from '../apis/questions'
import { useQuestions } from '../hooks/useQuestions'
import answerKey from '../hooks/answerGen'
import { Question } from '../../models/question'

export default function Questions() {
  const [questionNum, setQuestionNum] = useState(0)
  const { isPending, isError, data, error } = useQuestions()

  function handleClick(e) {
    const buttons = document.querySelectorAll(
      '.Answer-button',
    ) as NodeListOf<HTMLButtonElement>

    if (e.target.innerHTML.toLowerCase() == answer) {
      console.log('correct')
    } else {
      console.log('incorrect')
    }
    setQuestionNum(1 + questionNum)
    setTimeout(() => {
      buttons.forEach((button) => {
        if (button.textContent === answer) {
          button.style.borderColor = 'green'
        } else {
          button.style.borderColor = 'red'
        }
      })
    }, 1000)

    // setQuestionNum(++questionNum)
  }
  console.log(answerKey)

  const answer = answerKey[questionNum]

  function questionOut(data: Question[]) {
    switch (data[questionNum].type) {
      case 'text':
        return <h3>{data[questionNum][answer]}</h3>
      case 'sound':
        return <h3>sound:{data[questionNum][answer]}</h3>
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
