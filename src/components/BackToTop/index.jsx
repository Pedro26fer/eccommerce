import { useState } from "react"
import { BackToTopPosition } from "./style"

export function BackToTop(){
    const [showIcon, setShowIcon] = useState(true)
    
    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    window.onscroll = () => {
        window.scrollY > 200? setShowIcon(true) : setShowIcon(false)
    }

    return(
       <BackToTopPosition>
            {showIcon && (
                <img src="/Voltar ao topo.svg" alt="" onClick={backToTop} />
            )}
       </BackToTopPosition>
    )
}