import { LabelledInput } from './common/LabelledInput'
import { AuthHeader } from './common/AuthHeader'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from './ui/Button'
import { SignupType } from '@ritiksjadhav/unfold-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Alert } from './ui/Alert'

export const AuthSignup = () => {
    const methods = useForm<SignupType>()
    const navigate = useNavigate()
    const [alert, setAlert] = useState('')

    const onSubmit = async (data?: SignupType) => {
        setAlert('')
        axios.post(`${BACKEND_URL}/api/v1/user/signup`, data)
            .then((response) => {
                const jwt = response.data
                localStorage.setItem('token', jwt)
                navigate('/blogs')
            })
            .catch((error) => {
                setAlert(error.response.data.error)
            })
    }

    return (
        <div className='h-screen grid content-center justify-center'>
            <AuthHeader to='/signin' label='Login' />
            <div className='mt-2'>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <LabelledInput name='name' type='text' label='Name' placeholder='Ritik Jadhav' />
                        <LabelledInput name='email' type='email' label='Email' placeholder='ritik@gmail.com' />
                        <LabelledInput name='password' type='password' label='Password' placeholder='•••••••••' />
                        <Button onClick={() => { }} label='Sign Up' />
                    </form>
                </FormProvider>
            </div>
            <div className='flex justify-center'>
                {(alert !== '') && <Alert message={alert} />}
            </div>
        </div>)
}