import { LabelledInput } from './common/LabelledInput'
import { AuthHeader } from './common/AuthHeader'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from './ui/Button'
import { SigninType } from '@ritiksjadhav/unfold-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Alert } from './ui/Alert'

export const AuthSignin = () => {
    const methods = useForm<SigninType>()
    const navigate = useNavigate()
    const [alert, setAlert] = useState('')

    const onSubmit = async (data?: SigninType) => {
        setAlert('')
        axios.post(`${BACKEND_URL}/api/v1/user/signin`, data)
            .then((response) => {
                const jwt = response.data.token
                localStorage.setItem('token', jwt)
                navigate('/blogs')
            })
            .catch((error) => {
                setAlert(error.response.data.error)
            })
    }

    return (
        <div className='h-screen grid content-center justify-center'>
            <AuthHeader to='/signup' label='Register' />
            <div className='mt-2'>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <LabelledInput name='email' type='email' label='Email' placeholder='ritik@gmail.com' />
                        <LabelledInput name='password' type='password' label='Password' placeholder='•••••••••' />
                        <Button onClick={() => { }} label='Login' />
                    </form>
                </FormProvider>
            </div>
            <div className='flex justify-center'>
                {(alert !== '') && <Alert message={alert} />}
            </div>
        </div>)
}