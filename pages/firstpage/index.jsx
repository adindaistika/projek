import LabelForm from '@/components/labelForm';
import logo from '@/public/static/auth/logo.png'

const Login = () => {
  return (
    <div className="min-h-screen px-10 bg-sky-100 grid place-items-center">
      <div className="w-full md:max-w-lg p-5 rounded-lg shadow-lg bg-white text-sky-500">
        <img src={logo.src} className="w-[50px] m-auto"></img>
        <p className="text-xs text-center mb-10">
        </p>
        <form className="flex flex-col gap-3" action="">
          <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Login</button>
          <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Sign Up</button>
        </form>
      </div>
    </div>
  );
};


export default Login;