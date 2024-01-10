import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <nav className="bg-slate-200">
 
        <div className=" flex justify-between mx-auto max-w-6xl p-4 items-center ">
           <Link to={"/"}> <h1 className="text-2xl font-bold"> Mern Auth </h1> </Link>

            <ul className="flex gap-4">
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/about"}><li>About</li></Link>
                <Link to={"/signin"}><li>SignIn</li></Link>
            
            </ul>
        </div>


    </nav>
  )
}
