//import './Footer.css'
import { getFooterCopy, getFullYear } from "../utils/utils"
const AppFooter = () => {
    const currentYear = getFullYear();
    return (
        <footer
            className='absolute bottom-8 border-t-4 border-red-500 w-screen grid place-content-center pt-6'
            data-testid='App-footer'
        >
            <p
                className='text-2xl italic'
                data-testid='copyright'
            >
                Copyright {currentYear} - {getFooterCopy(true)}
            </p>
        </footer>
    )
}
export default AppFooter
