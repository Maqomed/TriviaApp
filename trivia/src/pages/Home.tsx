import { Link } from 'react-router-dom'
import MainButton from '../components/Buttons/MainButton'

function Home() {

    return (
        <div className='flex flex-col h-screen items-center text-white  font-bold font-mono'>
            <div className='title pt-10 text-3xl'>
                <h2>Welcome to the Tvia Challenge!</h2>
            </div>
            <div className='mt-24 text-3xl space-y-10'>
                <p>You will be presented with 10 True or False questions</p>
                <p className='flex justify-center'>Can you score 100%?</p>
            </div>
            <div >

            </div>
            <Link to='/quiz' className='m-auto animate-bounce'>
                <MainButton value="Begin" />
            </Link>
        </div>
    )


}

export default Home