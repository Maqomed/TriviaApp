import React from 'react'

interface AnswerButtonProps {
    handleButtonClick: (answer: string) => void
    answer: string,

}
export const AnswerButton: React.FC<AnswerButtonProps> = ({ answer, handleButtonClick }) => {
    return (
        <button onClick={() => handleButtonClick(answer)} className='bg-white mt-10 text-purple-800 p-4 rounded-lg shadow-md w-24'>{answer}</button>
    )

}

export default AnswerButton