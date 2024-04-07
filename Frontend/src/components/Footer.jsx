import React from 'react'

const Footer = () => {
  return (
  <>
  <footer className="bg-gray-800 text-white py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {/* Column 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel risus sit amet metus rhoncus luctus.</p>
            </div>
            {/* Column 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="text-sm hover:text-blue-500">Web Design</a></li>
                <li className="mb-2"><a href="#" className="text-sm hover:text-blue-500">Graphic Design</a></li>
                <li className="mb-2"><a href="#" className="text-sm hover:text-blue-500">Digital Marketing</a></li>
                <li className="mb-2"><a href="#" className="text-sm hover:text-blue-500">SEO Services</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-sm">123 Main Street</p>
              <p className="text-sm">New York, NY 10001</p>
              <p className="text-sm">info@example.com</p>
              <p className="text-sm">(123) 456-7890</p>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="border-t border-gray-600 mt-2 pt-4 text-sm text-center">
            <p>&copy; 2024 bisen_tejas_. All rights reserved.</p>
            <p>Designed with <i className="fas fa-heart text-red-500"></i> Tejas Bisen</p>
          </div>
        </div>
      </footer>
  
  </>
  )
}

export default Footer