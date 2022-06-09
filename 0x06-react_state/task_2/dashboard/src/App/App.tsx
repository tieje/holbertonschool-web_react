//import './App.css';
import AppHeader from '../Header/Header';
import AppLogin, { AppLoginPropType } from '../Login/Login';
import AppFooter from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { initialAppState, listCourses, listNotifications } from '../Variables/State';
import CourseList from '../CourseList/CourseList';
import { useEffect, useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { APP_TEST_IDS } from '../Variables/TestIds';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { useAuth } from './AppContext';

export type AppStatePropsType = {
  isLoggedIn?: boolean
  displayDrawer?: boolean
  isTesting?: boolean,
}
const App = ({ PropsOverride }: { PropsOverride?: AppStatePropsType }) => {
  const context = useAuth()
  const [isLoggedIn, setIsLoggedIn] = useState(initialAppState.isLoggedIn)
  const [displayDrawer, setDisplayDrawer] = useState(initialAppState.displayDrawer)
  const [firstKeyup, setFirstKeyup] = useState('')
  // useEffects
  useEffect(() => {
    if (PropsOverride?.isLoggedIn) {
      setIsLoggedIn(PropsOverride.isLoggedIn)
      context.dispatch({ type: 'setLoggedIn', payload: true })
    }
    if (PropsOverride?.displayDrawer) setDisplayDrawer(PropsOverride.displayDrawer)
  }, [])
  // Functions
  // Notifications
  const handleDisplayDrawer = () => {
    setDisplayDrawer(true)
  }
  const handleHideDrawer = () => {
    setDisplayDrawer(false)
  }
  // Login
  const handleLogin = () => {
    setIsLoggedIn(true)
    context.dispatch({ type: 'setLoggedIn', payload: true })
    console.log('logged in')
  }
  const LoginProp: AppLoginPropType = {
    LoginMethod: handleLogin
  }
  // keyboard shortcuts
  const handleKeyUp = (event: KeyboardEvent) => {
    //console.log(event.key)
    if (isLoggedIn && ((firstKeyup === 'Control' && event.key === 'h') ||
      (firstKeyup === 'h' && event.key === 'Control'))) {
      setFirstKeyup('')
      setIsLoggedIn(false)
      context.dispatch({ type: 'setLoggedIn', payload: false })
      if (PropsOverride?.isTesting) {
        alert('Logging you out')
      }
      console.log('logout')
    } else {
      setFirstKeyup(event.key)
    }
  }
  useEventListener('keyup', handleKeyUp, undefined, { passive: false })
  return (
    <>
      <div
        className='grid justify-end p-5 hover:animate-bounce'
        data-testid={APP_TEST_IDS.outermost_tag}
        onClick={handleDisplayDrawer}
      >
        Your Notifications
      </div>
      <div className='grid lg:grid-cols-2'>
        <div className='cols-span'></div>
        {displayDrawer ? <Notifications hideMethod={handleHideDrawer} props={listNotifications} /> : null}
      </div>
      <div className='relative h-screen'>
        <AppHeader />
        <main
          className='pl-16 grid place-content-center h-96'
          data-testid='App-body'
        >
          {isLoggedIn || PropsOverride?.isLoggedIn ?
            <BodySectionWithMarginBottom title={'CourseList'}>
              <CourseList props={listCourses} />
            </BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title={'Log in to continue'}>
              <AppLogin props={LoginProp} />
            </BodySectionWithMarginBottom>
          }
          <BodySection title={'News from the School'}>
            <p>Lots of News from the school</p>
          </BodySection>
        </main>
        <AppFooter />
      </div>
    </>
  );
}
export default App;