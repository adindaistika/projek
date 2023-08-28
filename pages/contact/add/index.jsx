import LabelForm from "@/components/labelForm";
import { useState } from "react";
import Select from 'react-select';

export default function AddContact(props) {
    const [valueCategory, setValueCategory] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChange = (e) =>{
        setValueCategory(e); 
    }

    return(
            <form className="mt-5">
                <div className="grid grid-cols-2 gap-3">
                    <LabelForm label="First Name" type="Text" name="firstname">First Name</LabelForm>
                    <LabelForm label="Last Name" type="Text" name="lastname">Last Name</LabelForm>
                </div>
                <LabelForm label="Phone Number" type="Text" name="phonenumber">Phone Number</LabelForm>
                <LabelForm label="Work Phone Number" type="Text" name="workphonenumber">Work Phone Number</LabelForm>
                <LabelForm label="Home Phone Number" type="Text" name="homephonenumber">Home Phone Number</LabelForm>
                <label className="flex flex-col w-full" htmlFor={''}>
                    <span className="font-semibold text-black">Category</span>
                        <Select
                            value={valueCategory}
                            onChange={(e) => handleChange(e)}
                            options={options}
                        />
                <button className="mt-[20px] bg-sky-700 p-2 rounded-md hover:bg-sky-500 font-semibold text-white"
                type="submit">Add Contact</button>
                </label>
            </form>
    )
}

export async function getServerSideProps() {
    let data = {
        title: "AddContact"
    }
    return {
      props: data,
    };
}