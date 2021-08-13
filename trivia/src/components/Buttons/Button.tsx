import React from 'react'

interface ButtonProps {
    handleButtonClick?: (id?: string) => void,
    id?: string,
    type: string,
    value: string
}

export const Button: React.FC<ButtonProps> = ({ value, type, id, handleButtonClick }) => {
    let btnClass;

    switch (type) {
        case 'main':
            btnClass = "text-3xl bg-transparent hover:bg-purple-900 text-white font-semibold hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent rounded shadow-xl";
            break;
        case 'question':
            btnClass = "bg-white mt-10 text-purple-800 p-4 rounded-lg shadow-md w-24 hover:bg-gray-300";
            break;
    }

    return (
        <button onClick={() => handleButtonClick && handleButtonClick(id)} className={btnClass}>{value}</button>
    )
}

export default Button