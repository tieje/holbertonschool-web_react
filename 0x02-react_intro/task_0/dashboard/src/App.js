import './App.css';
import HB_LOGO from './assets/hb_logo.jpeg'

function App() {
  return (
    <div class='relative h-screen'>
      <header class='flex flex-row border-b-4 border-red-500'>
        <img
          class=''
          src={HB_LOGO}
          alt='Holberton'
          width='200'
          height='200'
        />
        <h1 class='grid place-content-center text-5xl font-bold text-red-500'>
          School dashboard
        </h1>
      </header>
      <main>
        <p class='grid text-2xl h-52 pl-16 content-center'>
          Login to access the full dashboard
        </p>
      </main>
      <footer class='absolute bottom-8 border-t-4 border-red-500 w-screen grid place-content-center pt-6'>
        <p class='text-2xl italic'
        >Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
