import React from 'react'
import error from '../Images/error.webp'

const ErrorPage = () => {
    const useCheckMobileScreen = () => {
        const [width, setWidth] = React.useState(window.innerWidth);
        const handleWindowSizeChange = () => {
                setWidth(window.innerWidth);
        }
    
        React.useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);
    
        return (width <= 768);
    }
    return(
        <div>
           <img  src={error} alt='Error' title='src:Google' style={{
               width: useCheckMobileScreen()?'80%':'50%' , marginLeft:'auto', marginRight:'auto', 
           }} />
        </div>
    )
}

export default ErrorPage