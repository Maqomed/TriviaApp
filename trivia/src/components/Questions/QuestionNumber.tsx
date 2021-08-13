import React from 'react'

interface QuestionNumberProps {
    currentQuestionNumber: number,
    questions: Array<any>
}

export const QuestionNumber: React.FC<QuestionNumberProps> = ({ currentQuestionNumber, questions }) => {
    return (
        <div className="flex justify-center pt-10 text-white font-bold font-mono text-xl">
            <p className="">{currentQuestionNumber} out of {questions.length}</p>
        </div>
    )
}

export default QuestionNumber