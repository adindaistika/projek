import { IconUserCircle } from '@tabler/icons-react';
const Header = (props) => {
    const{ data } = props;

    return (
        <div className="p-[10px] bg-white flex justify-end h-[80px] items-center fixed top-0 left-[200px] right-0 z-10">
            <div className='w-full lg:px-[30px] lg:m-auto text-sky-800 font-semibold'>{data.title}</div>
            <IconUserCircle size={50}/>
         </div>
    )

}

export default Header;