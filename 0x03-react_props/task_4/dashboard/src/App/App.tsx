//import './App.css';
import AppHeader from '../Header/Header';
import AppLogin from '../Login/Login';
import AppFooter from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { useEffect, useState } from 'react';

export type AppStatePropsType = {
  isLoggedIn?: boolean
  displayDrawer?: boolean
}
const initialAppState: AppStatePropsType = {
  isLoggedIn: false,
  displayDrawer: false
}

const App = ({ PropsOverride }: { PropsOverride?: AppStatePropsType }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialAppState.isLoggedIn)
  const [displayDrawer, setDisplayDrawer] = useState(initialAppState.displayDrawer)
  useEffect(() => {
    if (PropsOverride?.isLoggedIn) setIsLoggedIn(PropsOverride.isLoggedIn)
    if (PropsOverride?.displayDrawer) setDisplayDrawer(PropsOverride.displayDrawer)
  }, [PropsOverride])
  return (
    <>
      <div className='grid justify-end p-5'>
        Your Notifications
      </div>
      <div className='grid grid-cols-2'>
        <div className='cols-span'></div>
        {displayDrawer ? <Notifications /> : null}
      </div>
      <div className='relative h-screen'>
        <AppHeader />
        <main
          className='pl-16 grid place-content-center h-96'
          data-testid='App-body'
        >
          <form className='grid grid-cols-1 w-52 place-content-center gap-3'>
            {isLoggedIn || PropsOverride?.isLoggedIn ? <CourseList /> : <AppLogin />}
          </form>
        </main>
        <AppFooter />
      </div>
    </>
  );
}
export default App;
