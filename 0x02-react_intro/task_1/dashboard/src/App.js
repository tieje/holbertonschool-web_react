import './App.css';
import HB_LOGO from './assets/hb_logo.jpeg'
import { getFooterCopy, getFullYear } from './utils';

function App() {
  const currentYear = getFullYear();
  return (
    <div className='relative h-screen'>
      <header className='flex flex-row border-b-4 border-red-500'>
        <img
          className=''
          src={HB_LOGO}
          alt='Holberton'
          width='200'
          height='200'
        />
        <h1 className='grid place-content-center text-5xl font-bold text-red-500'>
          School dashboard
        </h1>
      </header>
      <main>
        <p className='grid text-2xl h-52 pl-16 content-center'>
          Login to access the full dashboard
        </p>
      </main>
      <footer className='absolute bottom-8 border-t-4 border-red-500 w-screen grid place-content-center pt-6'>
        <p className='text-2xl italic'
        >Copyright {currentYear} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
