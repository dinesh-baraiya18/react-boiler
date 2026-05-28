import { Link, NavLink } from "react-router-dom"


const navLinks = [
  { name: "home", path: '/' },
  { name: "about", path: '/about' },
  { name: "blog", path: '/blog' },
  { name: "product", path: '/product' },
  { name: "nested comments", path: '/nested-comments' },
  { name: "file explorer", path: '/file-explorer' },
]

const Header = () => {
  return (
    <header className="header sticky top-0 py-3 bg-purple-200 z-10">
      <div className="container">
        <div className="flex items-center gap-4 justify-between">
          <Link to="/" className="font-bold text-2xl uppercase">Logo</Link>
          <ul className="flex items-center gap-3 capitalize">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <NavLink to={path} className="hover:text-blue-500">
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header