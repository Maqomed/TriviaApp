import React from 'react'

interface HeaderProps {
    question: string
}

export const QuestionHeader: React.FC<HeaderProps> = ({ question }) => {

    return (
        <div className="flex justify-center bg-white text-purple-800 p-10 rounded-lg shadow-md font-mono">
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
        </div>

    )
}

export default QuestionHeader