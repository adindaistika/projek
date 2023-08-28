import Banner from"@/components/banner";
import Events from"@/components/events";
import Pendingtasks from"@/components/pendingTasks";
import Search from"@/components/search";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

export default function Home(){
  return (
    <main className="w-full lg:px-[30px] lg:m-auto text-sky-800 ">
      <header className="flex justify-between items-center">
        <div>
          <h5>Selamat Datang,</h5>
          <h1 className="font-bold">Adinda Istika</h1>
        </div>
        
      </header>
      <div>
       <Search />
       <Banner />
       <div className="flex flex-col  lg:flex-row lg:gap-5 justify-between">
        <Events/>
        <Pendingtasks/>
       </div>
      </div>
    </main>
  );
}
export async function getServerSideProps() {
  let data = {
      title: "DashBoard"
  }
  return {
    props: data,
  };
}