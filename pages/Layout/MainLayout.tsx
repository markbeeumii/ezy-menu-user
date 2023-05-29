import { SeacrhTop } from "@/src/components/Searchbar"
import { useContext,  useState } from "react"
import { PageContext } from "../_app"
import { useRouter } from "next/router"
import { Back } from "@/src/components/back"
import { FooterScreen } from "@/src/components/footer"
import { LogoTop } from "@/src/components/LogoTop"

export const MainLayout= ({children}:any) =>{
  const router = useRouter()
  const[active, setActive] = useState(0)
  const[menus,setMenus] = useState([])
  const[hide, SetHide] = useState(true)
  //let isHomePage= useContext(PageContext)
  //console.log(isHomePage.page)
  
  return(
    <>
      <LogoTop/>
      <SeacrhTop
        active={active}
        setActive={setActive}
        menus={menus}
        setMenus={setMenus}
        hide={hide}
        SetHide={SetHide}
      />
      
      {
        children
      }
      <FooterScreen/>
    </>
  )
}

export default MainLayout