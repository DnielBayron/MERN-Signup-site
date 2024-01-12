import { Link } from 'react-router-dom';

export default function SignUp() {

const inputText = "bg-slate-100 p-3 rounded-lg";

  return (
    <div className=" p-3 mx-auto max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form className="flex flex-col gap-4">

        <input type="text" id="username" placeholder="Username" className={inputText} />
        <input type="email" id="email" placeholder="Email" className={inputText} />
        <input type="password" id="password" placeholder="Password" className={inputText} />

      <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>

      </form>

      <form>
      <div className='flex gap-2 mt-3'>
        <p>Have an account?</p>
        <Link to="/sign-in"> <span className='text-blue-500'>Sign In</span></Link>
        </div>
      </form>





    </div>
  )
}
