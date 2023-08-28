import LabelForm from '@/components/labelForm';
import logo from '@/public/static/auth/logo.png'
import Link from 'next/link';

const Login = () => {
  return (
    <div className="min-h-screen px-[30px grid place-items-center">
      <div className="w-full md:max-w-lg p-5 rounded-lg shadow-lg bg-white text-sky-500">
        <img src={logo.src} className="w-[50px] m-auto"></img>
        <h1 className="text-center mt-5 text-2xl font-bold">LOGIN</h1>
        <p className="text-xs text-center mb-10">
          Please login with your account!
        </p>
        <form className="flex flex-col gap-3" action="">
          <LabelForm name={"email"} label={"Email"} type={"email"}>Input your email</LabelForm>
          <LabelForm name={"password"} label={"Password"} type={"password"}>Input your password</LabelForm>
          <Link href={'/login'}></Link>
          <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Login Now</button>
        </form>
      </div>
    </div>
  );
};


export default Login;
