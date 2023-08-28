import logo from '@/public/static/auth/logo.png'
import { IconLogout } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { IconChecklist } from '@tabler/icons-react';
import { IconAddressBook } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { IconBrandWechat } from '@tabler/icons-react';
import { IconNotes } from '@tabler/icons-react';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <header className="fixed bg-white left-0 text-white h-screen w-[200px] z-10">
      <div className='bg-gradient-to-t from-blue-500 to-transparent p-[20px]'>
          <img src={logo.src} className="w-[50px] m-auto mb-[10px]"></img>
          <div className='text-center'>Nama Profile</div>
      </div>
      <div className='menu-sidebar flex flex-col justify-between'>
        <div>
          <Link href={'/'}>
            <div className='flex border-b-[1px] border-black gap-[5px] p-[5px]'>
            <div className='w-10 h-10 bg-pink-600 rounded-full flex items-center'>
            <span className='text-2xl m-auto'><IconHome color='black'></IconHome></span></div>
            <div className='text-left cursor-pointer text-black p-[7px]'>Home</div>
            </div>
          </Link>
          <Link href={'/task'}>
          <div className='flex border-b-[1px] border-black gap-[5px] p-[5px]'>
          <div className='w-10 h-10 bg-sky-700 rounded-full flex items-center'>
          <span className='text-2xl m-auto'><IconChecklist color='black'></IconChecklist></span></div>
          <div className='text-left cursor-pointer text-black p-[7px]'>Tasks</div>
          </div>
          </Link>
          <Link href={'/contact'}>
          <div className='flex border-b-[1px] border-black gap-[5px] p-[5px]'>
          <div className='w-10 h-10 bg-green-700 rounded-full flex items-center'>
          <span className='text-2xl m-auto'><IconAddressBook color='black'></IconAddressBook></span></div>
          <div className='text-left  cursor-pointer text-black p-[7px]'>Contacts</div>
          </div>
          </Link>
          <Link href={'/Events'}>
          <div className='flex border-b-[1px] border-black gap-[5px] p-[5px]'>
          <div className='w-10 h-10 bg-yellow-700 rounded-full flex items-center'>
          <span className='text-2xl m-auto'><IconCalendarEvent color='black'></IconCalendarEvent></span></div>
          <div className='text-left cursor-pointer text-black p-[7px]'>Events</div>
          </div>
          </Link>
          <Link href={'/Tutorial'}>
          <div className='flex border-b-[1px] border-black gap-[5px] p-[5px]'>
          <div className='w-10 h-10 bg-green-300 rounded-full flex items-center'>
          <span className='text-2xl m-auto'><IconBrandWechat color='black'></IconBrandWechat></span></div>
          <div className='text-left cursor-pointer text-black p-[7px]'>Tutorial</div>
          </div>
          </Link>
          <Link href={'/Subscription'}>
          <div className='flex border-b-[1px] border-black gap-[5px] p-[5px]'>
          <div className='w-10 h-10 bg-pink-300 rounded-full flex items-center'>
          <span className='text-2xl m-auto'><IconNotes color='black'></IconNotes></span></div>
          <div className='text-left cursor-pointer text-black p-[7px]'>Subscription</div>
          </div>
          </Link>

        </div>
        <div className=''>
          <div className='w-10 h-10 m-auto bg-red-700 rounded-full flex items-center'>
          <span className='text-2xl m-auto mb-[20px] cursor-pointer p-[8px]'>
          <IconLogout color='black'/></span>
        </div>
      </div>
      </div>
    </header>
  )
}
export default Sidebar;