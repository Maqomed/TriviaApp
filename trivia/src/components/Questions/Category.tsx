import React from 'react'

interface CategoryProps {
    questions: Array<any>,
    currentQuestion: number
}

export const Category: React.FC<CategoryProps> = ({ questions, currentQuestion }) => {
    return (
        <div>
            <p className='text-2xl flex justify-center mb-10 text-white font-mono font-bold'>{questions[currentQuestion].category}</p>
        </div>
    )
}

export default Category