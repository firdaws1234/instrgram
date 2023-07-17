import  {useState} from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide  from "../hooks/useDarkSide"

const Switcher = () => {
    const [colorTheme, setTheme] = useDarkSide();
        const [darkSide, setDarkSide] = useState( colorTheme === "Light" ? true : false);

        const taggleDarkMode = (checked) => {
            setTheme(colorTheme)
            setDarkSide(checked)
        }

        return(
            <>
            <div className='m-16 flex flex-col items-center'>
         <DarkModeSwitch
         checked={darkSide}
         onChange={taggleDarkMode}
         size={26}
         />
         
            </div>
            
            </>
        )
}

export default Switcher