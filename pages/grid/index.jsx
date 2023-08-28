
export default function Grid(props) {
    return (
      <div>
         <div class="mt-64 p-2 font-inter grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4 ">
        <h2 className="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex"><span className="self-center">Welcome to WPU</span></h2>
        <div className="h-15 text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 md:flex"><span className="self-end">@adindaistika</span></div>
         

         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
            <div className="w-full h-full bg-[url('/static/img/1.jpg')] rounded-lg bg-cover "></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/2.jpg')] rounded-lg bg-cover "></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/3.jpg')] rounded-lg bg-cover "></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/4.jpg')] rounded-lg bg-cover "></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/5.jpg')] rounded-lg bg-cover"></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-2 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/6.jpg')] rounded-lg bg-cover "></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/7.jpg')] rounded-lg bg-cover"></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500 ">
          <div className="w-full h-full bg-[url('/static/img/8.jpg')] rounded-lg bg-cover"></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/9.jpg')] rounded-lg bg-cover"></div>
         </div>
         <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('/static/img/10.jpg')] rounded-lg bg-cover"></div>
         </div>
       </div>
       <div class="mt-64 p-2 font-inter grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4 ">
       <h2 className="h-15 text-xl font-semibold text-slate-700 md:col-start-2 md:row-start-1"><span className="self-center">Text 1</span></h2>
       <div className="h-15 text-lg font-bold text-slate-600 md:col-start-3 md:row-start-3 md:flex"><span className="self-center">@adindaistika</span></div>

       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4"></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-2 "></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]"></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-1"></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4"></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] "></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4"></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3"></div>
       <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]"></div>


       </div>
      </div>
     );
    };

    export async function getServerSideProps() {
        let data = {
            title: "Grid"
        }
        return {
          props: data,
        };
    }
        