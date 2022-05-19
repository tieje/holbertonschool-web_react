//import './App.css';
import AppHeader from '../Header/Header';
import AppLogin from '../Login/Login';
import AppFooter from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
const App = () => {
  return (
    <>
      <Notifications />
      <div className='relative h-screen'>
        <AppHeader />
        <main className='pl-16' data-testid='App-body'>
          <p className='grid text-2xl h-52 content-center'>
            Login to access the full dashboard
          </p>
          <form className='grid grid-cols-1 w-52 place-content-center gap-3'>
            <AppLogin />
          </form>
        </main>
        <AppFooter />
      </div>
    </>
  );
}
export default App;
