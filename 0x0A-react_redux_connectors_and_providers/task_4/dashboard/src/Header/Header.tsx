//import './Header.css'
import HB_LOGO from '../assets/hb_logo.jpeg'
const AppHeader = () => {
    return (
        <header
            className='flex flex-row border-b-4 border-red-500 mb-10'
            data-testid='App-header'
        >
            <img
                className='lg:w-52 w-48'
                src={HB_LOGO}
                alt='Holberton'
                //width='200'
                //height='200'
                data-testid='header-img'
            />
            <h1
                className='grid place-content-center lg:text-5xl text-3xl font-bold text-red-500'
                data-testid='header-h1'
            >
                School dashboard
            </h1>
        </header>
    )
}
export default AppHeader
