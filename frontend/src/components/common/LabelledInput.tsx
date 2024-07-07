import { useFormContext } from 'react-hook-form'
import { InputProps } from './types/auth'

export const LabelledInput = ({ type, name, label, placeholder }: InputProps) => {
    const { register } = useFormContext()
    
    return (
    <div className='my-4'>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input type={type} id={label} {...register(name)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>)
}
