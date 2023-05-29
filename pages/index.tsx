import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
//import { MenuCard } from '@/src/components/menuCard'
import { HomePageScreen } from '@/src/screen/HomePage'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useContext } from 'react'
import { CategoryContext } from './_app'


const inter = Inter({ subsets: ['latin'] })

export default function Home({res}:any) {
  let isCategory = useContext(CategoryContext)

  let isMenus
  if(isCategory.category===0){
    isMenus = res
  }else {
    isMenus = res?.filter((p:any) => p.category?.id === isCategory.category)
  }

  if(isMenus.length===0){
    isMenus = res?.filter((p:any) => p?.category_Id === isCategory.category)
  }
  // console.log('ID> ',isCategory.category)
  // console.log('== ',res)
  // console.log('>>',isMenus)
  return (
    <>
      <Head>
        <title>Ezy Menu</title>
        <meta name="description" content="Power by godital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
        <HomePageScreen 
          menus={isMenus}
        />
    </>
  )
}


Home.getInitialProps = async (context:any) => {
  //const router = useRouter()
  const {name} = context.query 
  const {asPath} = context
  let UrlBase, baseURL2, res,menus
  // console.log("s=>",name)
  // console.log(asPath)
  if(name){
      if(name==='null'){
        baseURL2 = String(process.env.NEXT_PUBLIC_FOOD_URL+'/menus')
        menus = await (await axios.get(baseURL2)).data.menus
      }else{
        UrlBase = String(process.env.NEXT_PUBLIC_FOOD_URL+`/search/menus?name=${name==='null'?'':name}`)
        res = await (await axios.get(UrlBase)).data.menus
      }
  }else if(asPath === '/' || !name ){
    baseURL2 = String(process.env.NEXT_PUBLIC_FOOD_URL+'/menus')
    menus = await (await axios.get(baseURL2)).data.menus
  }

  return{
    // props:{
    //   res: menus? menus : res
    // }
    res: menus? menus : res
  }

}