import { useContext, useState } from "react";
import { SeacrhTop } from "../components/Searchbar"
import { FooterScreen } from "../components/footer";
import { MenuCard } from "../components/menuCard";
import { MenuCard2 } from "../components/menuCard2";
import { useQuery } from "react-query";
import { AxiosClient } from "../libs/AxiosClient";
import { type } from "os";
import axios from "axios";
import { GetStaticProps, GetServerSideProps } from "next";
import { BestSeller } from "../components/bestSeller";
import { CategoryContext } from "@/pages/_app";

type HomePageProps={
  menus ? :any
  active ? : number
  setActive ? : (active: number) => void
}

export const HomePageScreen = ({menus,active, setActive}: HomePageProps) => {
  const ListArr = ["Categorie", "foods", "drinks", "Ice-cream", "Snacks","ss"];//, "", "7", "8"
  
  //console.log("Filter ID :> ",menus)
  return(
    <>
      {
        menus.length === 0? 
        <div className="h-100vh">
          <h3 className="text-center mt-4 text-primary">Menus Not Found</h3>
        </div> 
      :
        <div className={menus.length===0?"container mt-3 p-0 h-100vh":"container mt-3 p-0"}>
          <div className="row px-2">
            {
              menus?.sort((a:any, b:any) => b.id - a.id)?.map((p:any, index:number) => {
                return(
                  <div className="col-md-3 mb-4 " key={index+1}>
                    <MenuCard
                      code={p.code}
                      image={p.thumbnail}
                      title_kh={p.title_kh}
                      title_en={p.title_en}
                      price={p.price}
                    />
                  </div>
                )
              })
            }
          </div>
          
          {/* <BestSeller/> */}
        </div>
   }
    </>
  )
}


export const getServerSideProps : GetServerSideProps = async (context:any) => {
  const {name} = context.query.name ?? ""
  console.log('Name=> ',name)

  /*
  const UrlBase = String(process.env.NEXT_PUBLIC_FOOD_URL+`/search/menus?name=${name}`)
  const baseURL2 = String(process.env.NEXT_PUBLIC_FOOD_URL+'/menus')
  let res,menus
  
  res = await (await axios.get(UrlBase)).data.menus
  menus = await (await axios.get(baseURL2)).data.menus
  
  console.log(menus)
  */

  return{
    props:{
      res: name==='null' || name===''? 'menus' : 'res'
    }
  }

}