import "../styles/item-fonts-container.scss"

import { ButtonCopy } from './ButtonCopy';
interface props {
    fontsData: fontsData
}

interface fontsData {
    name: string,
    url: string,
}

export const ItemFontsContainer = ({ fontsData }: props) => {
    
    const { name, url } = fontsData; 

    return (
        <li className='item-fonts-container'>
            <p className='fonts-name' style={{fontFamily : name}}>{ name }</p>
            <ButtonCopy url={url}/>
        </li>
    )
}