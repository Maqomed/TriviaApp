import Button from '../components/Buttons/Button'
import { Link } from 'react-router-dom'
import React from 'react'

interface ResultsProps {
    score: number,
    questions: Array<any>,
    correctAnswers: Array<string>
}

export const Results: React.FC<ResultsProps> = ({ score, questions, correctAnswers }) => {
    return (
        <div className="h-screen max-w-5xl">
            <div className="flex justify-center font-mono font-bold text-white text-3xl pt-2">You scored {score}/{questions.length}</div>
            {
                questions.map((item, id) => (
                    <div key={id} className={`${correctAnswers.includes(item.question) ? 'bg-green-500 text-white font-bold font-mono mt-1 p-2 mx-auto flex flex-grow text-left rounded-lg' : 'bg-red-500 text-gray-800 font-mono mt-1 p-2 mx-auto flex flex-grow text-left rounded-lg'}`} dangerouslySetInnerHTML={{ __html: item.question }}>
                    </div>
                ))
            }
            <div className='flex justify-center mt-2'>
                <Link to='/' className='m-auto'>
                    <Button value="Play Again" type="main" />
                </Link>

            </div>
        </div>

    )
}

export default Results