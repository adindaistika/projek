const PendingTasks = () => {
    return (
      <div className="my-3 w-full md:w-1/2">
        <h1 className="py-2 font-bold">Pending Tasks</h1>
        <div className="bg-white my-2 font-semibold text-sky-800 p-3 rounded-md cursor-pointer grid grid-rows-1  items-center">
          <h1>My Task</h1>
        </div>
        <div className="bg-white my-2 font-semibold text-sky-800 p-3 rounded-md cursor-pointer grid grid-rows-1 items-center">
          <h1>My Task</h1>
        </div>
        <div className="bg-white my-2 font-semibold text-sky-800 p-3 rounded-md cursor-pointer grid grid-rows-1 items-center">
          <h1>My Task</h1>
        </div>
        <div className="bg-white my-2 font-semibold text-sky-800 p-3 rounded-md cursor-pointer grid grid-rows-1 items-center">
          <h1>My Task</h1>
        </div>
      </div>
    );
  };
  
  export default PendingTasks;