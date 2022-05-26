//import './App.css';
import AppHeader from '../Header/Header';
import AppLogin from '../Login/Login';
import AppFooter from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { useEffect, useState } from 'react';
import { CourseShapePropType } from '../CourseList/CourseShape';
import { NotificationItemShape } from '../Notifications/NotificationItemShape';
import { DEFAULT, EOD, URGENT } from '../Variables/State';
import { getLatestNotification } from '../utils/utils';

export type AppStatePropsType = {
  isLoggedIn?: boolean
  displayDrawer?: boolean
}
const initialAppState: AppStatePropsType = {
  isLoggedIn: false,
  displayDrawer: false
}
export const listCourses: CourseShapePropType[] = [
  {
    id: 1,
    name: 'ES6',
    credit: 60
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20
  },
  {
    id: 3,
    name: 'React',
    credit: 40
  },
]
export const listNotifications: NotificationItemShape[] =
  [
    {
      id: 1,
      html: undefined,
      type: DEFAULT,
      value: 'New course available'
    },
    {
      id: 2,
      html: undefined,
      type: URGENT,
      value: 'New course available'
    },
    {
      id: 3,
      html: getLatestNotification(),
      type: EOD,
      value: undefined
    },
  ]

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
        {displayDrawer ? <Notifications props={listNotifications} /> : null}
      </div>
      <div className='relative h-screen'>
        <AppHeader />
        <main
          className='pl-16 grid place-content-center h-96'
          data-testid='App-body'
        >
          <form className='grid grid-cols-1 w-52 place-content-center gap-3'>
            {isLoggedIn || PropsOverride?.isLoggedIn ? <CourseList props={listCourses} /> : <AppLogin />}
          </form>
        </main>
        <AppFooter />
      </div>
    </>
  );
}
export default App;
