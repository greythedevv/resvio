import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#E8D9CD]">
       
        <Link to="/">
          <p className="font-serif text-xl text-[#1F2421] cursor-pointer">resvio</p>
        </Link>
        <div className='flex items-center gap-4'>
        <button className="bg-[#C1694F] text-[#FAF6F1] font-serif text-sm px-6 py-3 rounded-lg hover:bg-[#a8573f] transition-colors">
          Get started
        </button>
        <button className="bg-white text-[#1F2421] font-serif text-sm px-6 py-3 rounded-lg border border-[#E8D9CD] hover:border-[#C1694F] transition-colors">
            <Link to="/login">Login</Link>
          </button>
          </div>
      </nav>
    </div>
  )
}

export default NavBar
