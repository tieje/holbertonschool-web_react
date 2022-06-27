//import './Footer.css'
import { useAuth } from "../App/AppContext";
import { getFooterCopy, getFullYear } from "../utils/utils"
const AppFooter = () => {
    const currentYear = getFullYear();
    const context = useAuth()
    return (
        <footer
            className='lg:absolute lg:bottom-8 border-t-4 border-red-500 w-screen grid place-content-center pt-6 mt-32'
            data-testid='App-footer'
        >
            {context.state.isLoggedIn ? <a
                href='#'
                className='test-2xl text-center'
            >
                Contact Us
            </a> :
                <p
                    className='text-2xl italic'
                    data-testid='copyright'
                >
                    Copyright {currentYear} - {getFooterCopy(true)}
                </p>
            }
        </footer>
    )
}
export default AppFooter
