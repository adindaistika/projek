import Header from '@/components/header';
import Sidebar from '@/components/sidebar'
import '@/styles/globals.css'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {

  return (
  <div className='min-h-screen'> 
  <Sidebar/>
   <div className='ml-[200px]'>
    <Header data={pageProps}/>
    <div className='p-[20px] pt-[100px]'><Component {...pageProps} /></div>
   </div>
   </div>
  ) 

}
