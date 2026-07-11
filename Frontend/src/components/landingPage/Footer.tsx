import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'

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
                  <a href="#" className="hover:text-[#C1694F]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#1F2421] text-xs mb-3">
                Company
              </p>
              <ul className="space-y-2 text-xs text-[#7A756D]">
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#1F2421] text-xs mb-3">Legal</p>
              <ul className="space-y-2 text-xs text-[#7A756D]">
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C1694F]">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8D9CD]">
            <p className="text-[#7A756D] text-xs">
              © {new Date().getFullYear()} Resvio. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiInstagram size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiTwitter size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiFacebook size={16} />
              </a>
              <a href="#" aria-label="Email" className="text-[#7A756D] hover:text-[#C1694F]">
                <FiMail size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
