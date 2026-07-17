import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white border-t border-[#E8D9CD] px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <p className="font-serif text-lg text-[#1F2421] mb-2">
                resvio
              </p>
              <p className="text-[#7A756D] text-xs">rsvp, sorted.</p>
            </div>
            <div>
              <p className="font-medium text-[#1F2421] text-xs mb-3">
                Product
              </p>
              <ul className="space-y-2 text-xs text-[#7A756D]">
                <li>
                   <Link to="/" className="hover:text-[`#C1694F`]">
                    Features
                    </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#C1694F]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#C1694F]">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#1F2421] text-xs mb-3">
                Company
              </p>
              <ul className="space-y-2 text-xs text-[#7A756D]">
                <li>
                  <Link to="/about" className="hover:text-[#C1694F]">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#C1694F]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#C1694F]">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#1F2421] text-xs mb-3">Legal</p>
              <ul className="space-y-2 text-xs text-[#7A756D]">
                <li>
                  <Link to="/" className="hover:text-[#C1694F]">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#C1694F]">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#C1694F]">
                    Cookie policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8D9CD]">
            <p className="text-[#7A756D] text-xs">
              © {new Date().getFullYear()} Resvio. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/" aria-label="Instagram" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiInstagram size={16} />
              </Link>
              <Link to="/" aria-label="Twitter" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiTwitter size={16} />
              </Link>
              <Link to="/" aria-label="Facebook" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiFacebook size={16} />
              </Link>
              <Link to="/" aria-label="Email" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiMail size={16} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
