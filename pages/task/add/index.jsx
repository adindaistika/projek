import LabelForm from "@/components/labelForm";
export default function AddTask(props) {
return (
    <main className="w-full lg:max-w-3xl lg:mx-auto text-black p-7">
      <h1 className="text-center font-bold text-2xl">Add Task</h1>
      <form className="flex flex-col gap-3" action="">
        <LabelForm
          label={"Tittle"}
          name={"tittle"}
          bgColor="bg-white"
          type={"text"}
        >
          Title task...
        </LabelForm>
        <label className="flex flex-col" htmlFor="description">
          <span className="font-semibold text-sky-400">Description</span>
          <textarea
            className="outline-none w-full bg-white text-sky-800 placeholder:italic placeholder:text-sky-300 border-2 border-sky-400 p-2 rounded-md text-xs"
            name="description"
            rows={5}
            id="description"
          ></textarea>
        </label>
        <label className="flex flex-col" htmlFor="selectContact">
          <span className="font-semibold text-sky-400">Contact</span>
          <select
            className="outline-none w-full bg-white text-white font-semibold border-2 border-sky-400 p-2 rounded-md text-xs"
            name="selectContact"
            id="selectContact"
          >
            <option value="">Select Your Contact</option>
            <option value="Vivi">Vivi</option>
            <option value="Adinda">Adinda</option>
            <option value="Rahmat">Rahmat</option>
          </select>
        </label>
        <LabelForm
          label={"Date Time"}
          name={"date"}
          bgColor="bg-white"
          color="text-wgite"
          type={"date"}
        ></LabelForm>
        <label className="flex flex-col" htmlFor="selectContact">
          <span className="font-semibold text-sky-400">Priority</span>
          <select
            className="outline-none w-full bg-white text-white font-semibold border-2 border-sky-400 p-2 rounded-md text-xs"
            name="selectContact"
            id="selectContact"
          >
            <option value="">Select Task Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <LabelForm
          label={"Reminder"}
          name={"reminder"}
          bgColor="bg-white"
          color="text-black"
          type={"date"}
        ></LabelForm>
        <button
          className="text-center font-bold bg-sky-700 w-full rounded-md p-2"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </main>
  );
};














    export async function getServerSideProps() {
    let data = {
        title: "AddTask"
    }
    return {
      props: data,
    };
}