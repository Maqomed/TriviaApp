import { useEffect, useState } from 'react'
import { fetchData } from '../../api/api'
import { getAnswers } from '../../utils'
import Header from '../QuestionHeader/Header'
import Category from './Category'
import Results from '../../pages/Results'
import QuestionNumber from './QuestionNumber'
import Loader from '../Loading/Loader'


function Questionaire() {

    var answers: Array<string> = []
    const [questions, setQuestions] = useState<Array<any>>([])
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1)
    const [score, setScore] = useState<number>(0)
    const [showScore, setShowScore] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState<Array<string>>([])

    useEffect(() => {
        const result = fetchData()
        result.then(data => {
            setQuestions(data.results)
        }
        )
    }, [])

    if (questions.length > 0) {
        answers = getAnswers(questions, currentQuestion)
    }

    const handleButtonClick = (answer: string) => {
        if (answer === questions[currentQuestion].correct_answer) {

            const correctUserAnswers = correctAnswers.slice(0)
            correctUserAnswers.push(questions[currentQuestion].question)
            setCorrectAnswers(correctUserAnswers)
            setScore(score + 1)

        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
            setCurrentQuestionNumber(currentQuestionNumber + 1)
        }
        else {
            setShowScore(true)
        }
    }

    return (
        showScore ? (
            <div>
                <Results score={score} questions={questions} correctAnswers={correctAnswers} />
            </div>
        ) :
            questions.length > 0 ? (
                <div className='m-auto w-1/2'>
                    <Category questions={questions} currentQuestion={currentQuestion} />
                    <Header question={questions[currentQuestion].question} />
                    <div className='flex justify-between'>
                        {answers.map((answer, id) => (
                            <button onClick={() => handleButtonClick(answer)} className='bg-white mt-10 text-purple-800 p-4 rounded-lg shadow-md w-24' key={id}>{answer}</button>
                        ))}
                    </div>
                    <QuestionNumber currentQuestionNumber={currentQuestionNumber} questions={questions} />
                </div>
            ) : (
                <Loader />
            )
    )
}
export default Questionaire