import { useEffect, useState } from "react"
import { LOGIN_TEST_IDS } from "../Variables/TestIds"

//import './Login.css'
export type AppLoginPropType = {
    LoginMethod(): void
}
const AppLogin = ({ props }: { props?: AppLoginPropType }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enableSubmit, setEnableSubmit] = useState(false)
    // Change Email and Password
    const handleChangeEmail = (value: string) => {
        setEmail(value)
    }
    const handleChangePassword = (value: string) => {
        setPassword(value)
    }
    useEffect(() => {
        if (email !== '' && password !== '') {
            setEnableSubmit(true)
        } else if (email === '' || password === '') {
            setEnableSubmit(false)
        }
    }, [email, password])
    return (
        <form
            className='grid grid-cols-1 w-52 gap-3 mt-10'
        >
            <p className='grid text-2xl h-52 åcontent-center'>
                Login to access the full dashboard
            </p>
            <label
                htmlFor='email'
                data-testid='login-label'
            >Email</label>
            <input
                className='border border-red-500 rounded-lg px-2 py-1 hover:bg-gray-200'
                type='text'
                id='email'
                name='name'
                data-testid='login-input-email'
                value={email}
                onChange={value => { handleChangeEmail(value.target.value) }}
            ></input>
            <label
                htmlFor='password'
                data-testid='login-label'
            >Password</label>
            <input
                className='border border-red-500 rounded-lg px-2 py-1 hover:bg-gray-200 mb-5'
                type='text'
                id='password'
                name='password'
                data-testid='login-input-password'
                value={password}
                onChange={value => { handleChangePassword(value.target.value) }}
            ></input>
            <button
                className='bg-blue-300 border border-blue-800 rounded-lg hover:bg-blue-600 focus:bg-blue-800 w-40 disabled:opacity-30'
                onClick={props?.LoginMethod}
                data-testid={LOGIN_TEST_IDS.login_button}
                disabled={!enableSubmit}
            >
                <input
                    type='submit'
                    value='OK'
                ></input>
            </button>
        </form>
    )
}
export default AppLogin
