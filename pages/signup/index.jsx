import LabelForm from '@/components/labelForm';
import logo from '@/public/static/auth/logo.png'
const Signup = () => {
    return (
      <div className="w-full px-[30px]  grid place-items-center">
        <div className="w-full md:max-w-lg p-5 rounded-lg shadow-lg bg-white text-sky-500">
        <img src={logo.src} className="w-[50px] m-auto"></img>
          <h1 className="text-center mt-5 text-2xl font-bold">SIGN UP</h1>
          <p className="text-xs text-center mb-10">
            Please login with your account!
          </p>
          <form className="flex flex-col gap-3" action="">
            <LabelForm name={"firstname"} label={"First name"} type={"text"}>Input your firstname</LabelForm>
            <LabelForm name={"lastname"} label={"Lastname"} type={"text"}>Input your lastname</LabelForm>
            <LabelForm name={"email"} label={"Email"} type={"email"}>Input your Email</LabelForm>
            <LabelForm name={"password"} label={"Password"} type={"password"}>Input your password</LabelForm>
            <LabelForm name={"codereferal"} label={"Code referal"} type={"text"}>Input your code</LabelForm>
            <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Sign Up Now</button>
          </form>
        </div>
      </div>
    );
  };

  
  export default Signup;
  