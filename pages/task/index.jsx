import Link from "next/link";

export default function Task(props) {
    return (
        <div className="w-full grid grid-cols-2  lg:mx-auto">
            <div className="grid place-items-center">
                <div className="bg-white w-80 h-64 rounded-xl border-2 border-sky-600 shadow-lg"></div>
            </div>
            <div className="place-items-center">
                <div className="bg-white w-full mx-auto p-2 cursor-pointer flex gap-3 items-center rounded-lg border-l-8 border-l-sky-600">
                <div className="grid place-items-center border rounded-full p-1">
                </div>
                <div>
                    <div>
                    <p className="text-xs font-semibold opacity-40">Related to</p>
                    <h1 className="flex items-center gap-3 font-bold">
                    Adinda Istika
                    </h1>
                    </div>        
                </div>
                </div>
                
                <div className="col-start-2 text-white">
                    {/* <h1 className="text-center font-bold text-2xl">Task Page</h1> */}
                    <div className="my-5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                    <span className="bg-green-700 w-max block rounded-md p-2">
                    </span>
                        <Link href={"/task/add"}>
                        <span className="block text-center font-bold bg-sky-700 rounded-md p-2">
                            Add Task
                        </span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="bg-sky-100 text-sky-700 flex items-center gap-3 p-2 rounded-md">
                            <input type="checkbox" defaultChecked name="check" id="check" />
                            <div>
                                <h1 className="text-lg font-bold">
                                    Task 1{" "}
                                    <span className="bg-green-600/40 mr-2 text-white py-1 px-3 rounded-full outline-1 outline-green-600 text-xs font-normal">
                                    Finished
                                    </span>
                                    <span className="bg-green-600/40 text-white py-1 px-3 rounded-full outline-1 outline-green-600 text-xs font-normal">
                                    20/7/2023
                                    </span>
                                </h1>
                                <p className="my-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                                <p className="text-xs">
                                    Contact : Rahmat{" "}
                                    <span className="bg-slate-600/40 rounded-full text-white py-1 px-3">
                                    Reminder : 20/7/2023 04.00 AM
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-sky-100 text-sky-700 flex items-center gap-3 p-2 rounded-md">
                            <input type="checkbox" name="check" id="check" />
                            <div>
                            <h1 className="text-lg font-bold">
                                Task 2{" "}
                                <span className="bg-rose-600/40 mr-2 text-white py-1 px-3 rounded-full outline-1 outline-rose-600 text-xs font-normal">
                                Unfinished
                                </span>
                                <span className="bg-green-600/40 text-white py-1 px-3 rounded-full outline-1 outline-green-600 text-xs font-normal">
                                20/7/2023
                                </span>
                            </h1>
                            <p className="my-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                            <p className="text-xs">
                                Contact : Vivi{" "}
                                <span className="bg-slate-600/40 rounded-full text-white py-1 px-3">
                                Reminder : 20/7/2023 04.00 AM
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    )
}



export async function getServerSideProps() {
    let data = {
        title: "Task"
    }
    return {
      props: data,
    };
}