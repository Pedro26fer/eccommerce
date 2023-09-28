import { useEffect, useState } from "react"
import { BackToTopPosition } from "./style"

export function BackToTop(){
    const [opacity, setOpacity] = useState(false)
    
    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setOpacity(scrollTop > 50)
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return(
       <BackToTopPosition opacity={opacity} onClick={backToTop}>
            <img src="/Voltar ao topo.svg" alt=""/> 
       </BackToTopPosition>
    )
}