import LabelForm from "@/components/labelForm";
import { useState } from "react";
import Select from 'react-select';


export default function Form(props) {
    const [valueCategory, setValueCategory] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChange = (e) =>{
        setValueCategory(e); 
    }
    return (
        <form className="mt-5">
                <div className="grid md:grid-cols-2 gap-3">
                    <LabelForm label="First Name" type="text" name="firstname">First Name</LabelForm>
                    <LabelForm label="Last Name" type="text" name="lastname">Last Name</LabelForm>
                    <LabelForm label="Email" type="email" name="Email">Email</LabelForm>
                    <LabelForm label="Nomor Hp" type="text" name="Nomor Hp">Nomor Hp</LabelForm>
                    <label className="flex flex-col w-full" htmlFor={'category'}>
                    <span className="font-semibold text-sky-400">{'Category'}</span>
                        <Select
                        value={valueCategory}
                        onChange={(e) => handleChange(e)}
                        options={options}
                    />
                     </label>
                    <LabelForm label="Password" type="password" name="Password">Password</LabelForm>
                    <div className="text-lg font-semibold text-sky-400">Gender
                        <div className="flex gap-5">
                        <label className="flex gap-3" htmlFor=''>
                    <span className="font-semibold text-sky-400"> Male </span>
                    <input type="radio" defaultChecked name="radio" id="radio" />
                        </label>
                        <label className="flex gap-3 " htmlFor=''>
                   <span className="font-semibold text-sky-400"> Female </span>
                   <input type="radio" defaultChecked name="radio" id="radio" />
                        </label> 
                        </div>
                    </div>
                    <div className="font-semibold text-sky-400">Checkbox 
                        <div className="flex gap-5">
                        <label className="flex gap-3" htmlFor=''>
                        <span className="font-semibold text-sky-400"> Option 1 </span>
                            <input type="checkbox" defaultChecked name="check" id="check" />
                        </label>
                        <label className="flex gap-3 " htmlFor=''>
                         <span className="font-semibold text-sky-400"> Option 2 </span>
                            <input type="checkbox" defaultChecked name="check" id="check" />
                        </label> 
                        </div>
                    </div>
             </div> 
             <label className="grid grid-col-start-2" htmlFor="description">
                 <span className="font-semibold text-sky-400">Description</span>
                 <textarea
                    className="outline-none bg-white text-sky-800 placeholder:italic placeholder:text-sky-300 border-2 border-sky-400 p-2 rounded-md text-xs"
                    name="description"
                    rows={5}
                    id="description"
                ></textarea>
                </label>
         </form>

    )
}

export async function getServerSideProps() {
    let data = {
        title: "Form"
    }
    return {
      props: data,
    };
}