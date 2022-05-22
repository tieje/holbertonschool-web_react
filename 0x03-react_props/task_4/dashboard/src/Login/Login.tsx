//import './Login.css'
const AppLogin = () => {
    return (
        <>
            <label
                htmlFor='email'
                data-testid='login-label'
            >Email</label>
            <input
                className='border border-red-500 rounded-lg px-2 py-1 hover:bg-gray-200'
                type='text'
                id='email'
                name='name'
                data-testid='login-input'
            ></input>
            <label
                htmlFor='password'
                data-testid='login-label'
            >Password</label>
            <input
                className='border border-red-500 rounded-lg px-2 py-1 hover:bg-gray-200'
                type='text'
                id='password'
                name='password'
                data-testid='login-input'
            ></input>
            <button
                className='bg-blue-300 border border-blue-800 rounded-lg hover:bg-blue-600 focus:bg-blue-800'
                data-testid='App-login'
            >
                <input type='submit' value='OK'></input>
            </button>
        </>
    )
}
export default AppLogin
