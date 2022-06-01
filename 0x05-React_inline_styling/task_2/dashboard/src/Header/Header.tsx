//import './Header.css'
import HB_LOGO from '../assets/hb_logo.jpeg'
const AppHeader = () => {
    return (
        <header
            className='flex flex-row border-b-4 border-red-500 mb-10'
            data-testid='App-header'
        >
            <img
                className=''
                src={HB_LOGO}
                alt='Holberton'
                width='200'
                height='200'
                data-testid='header-img'
            />
            <h1
                className='grid place-content-center text-5xl font-bold text-red-500'
                data-testid='header-h1'
            >
                School dashboard
            </h1>
        </header>
    )
}
export default AppHeader
