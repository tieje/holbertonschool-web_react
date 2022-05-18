import './App.css';
import HB_LOGO from './assets/hb_logo.jpeg'
import { getFooterCopy, getFullYear } from './utils';

const App = () => {
  const currentYear = getFullYear();
  return (
    <div className='relative h-screen'>
      <header className='flex flex-row border-b-4 border-red-500' data-testid='App-header'>
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
      <main className='pl-16' data-testid='App-body'>
        <p className='grid text-2xl h-52 content-center'>
          Login to access the full dashboard
        </p>
        <form className='grid grid-cols-1 w-52 place-content-center gap-3'>
          <label htmlFor='email'>Email</label>
          <input className='border border-red-500 rounded-lg px-2 py-1 hover:bg-gray-200' type='text' id='email' name='name'></input>
          <label htmlFor='password'>Password</label>
          <input className='border border-red-500 rounded-lg px-2 py-1 hover:bg-gray-200' type='text' id='password' name='password'></input>
          <button className='bg-blue-300 border border-blue-800 rounded-lg hover:bg-blue-600 focus:bg-blue-800'>
            <input type='submit' value='OK'></input>
          </button>
        </form>
      </main>
      <footer
        className='absolute bottom-8 border-t-4 border-red-500 w-screen grid place-content-center pt-6'
        data-testid='App-footer'
      >
        <p className='text-2xl italic'
        >Copyright {currentYear} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
