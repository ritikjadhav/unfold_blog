import { Link } from 'react-router-dom'
import { AuthProps } from './types/auth'

export const AuthHeader = ({ to, label }: AuthProps) => {
    return (
        <div className='px-8'>
            <h1 className='text-center text-3xl font-extrabold'>Create an account</h1>
            <div className='text-slate-500 text-center py-2'>
                {label === 'Login' ? 'Already ' : 'Don\'t '}have an account?
                <Link to={to} className='underline hover:text-slate-900 pl-2'>{label}</Link>
            </div>
        </div>
    )
}