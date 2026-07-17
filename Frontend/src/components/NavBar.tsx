import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#E8D9CD]">
       
        <Link to="/">
          <p className="font-serif text-xl text-[#1F2421] cursor-pointer">resvio</p>
        </Link>
        <button className="bg-[#C1694F] text-[#FAF6F1] font-serif text-sm px-5 py-2.5 rounded-lg hover:bg-[#a8573f] transition-colors">
          Get started
        </button>
      </nav>
    </div>
  )
}

export default NavBar
