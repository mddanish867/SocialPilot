import {Link} from "react-router-dom";
import {
  BarChart3,  
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
const Footer = () => {
  return (
    <>
     <footer className="w-full border-t bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">SocialPilot</span>
              </div>
              <p className="text-sm text-gray-500">
                The all-in-one social media management platform for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} SocialPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer