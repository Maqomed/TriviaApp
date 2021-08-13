import React from "react"
interface ButtonProps {
    value: string
}

export const BeginButton: React.FC<ButtonProps> = ({ value }) => {
    return (
        <button className="text-3xl bg-transparent hover:bg-purple-900 text-white font-semibold hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent rounded"> {value} </button>
    )
}

export default BeginButton

{/* <button onClick={() => handleButtonClick(answer)} className='bg-white mt-10 text-purple-800 p-4 rounded-lg shadow-md w-24'>{answer}</button> */ }