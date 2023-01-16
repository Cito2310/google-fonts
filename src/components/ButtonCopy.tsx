import { useLayoutEffect, useState } from "react"
import "../styles/button-copy.scss"

interface props {
    url: string,
}

export const ButtonCopy = ({ url }: props) => {
    const [stateCopy, setStateCopy] = useState(false);
    const durationAnimation = 1000;

    useLayoutEffect(() => {
        const newUrl = url.match(/'.*swap/g)?.[0].slice(1) as string;
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', newUrl);
        document.head.appendChild(link);
    }, [])

    const onCopy = () => { 
        navigator.clipboard.writeText(url);
        setStateCopy(true);
        setTimeout(()=>{ 
            setStateCopy(false)
        }, durationAnimation-60)
    }

    return (
        <button className="button-copy" onClick={onCopy}>
            <i className="fa-regular fa-clone"></i>    
                
            {
                stateCopy ?
                    <div 
                        className="container-advert" 
                        style={{ animationDuration: durationAnimation + "ms" }}
                    >
                        <p className="text-advert">Copy</p>
                    </div>
                : null
            }
        </button>
    )
}