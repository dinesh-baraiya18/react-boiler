import { Link } from "react-router-dom"


const navLinks = [
  { name: "home", path: '/' },
  { name: "about", path: '/about' },
  { name: "blog", path: '/blog' },
  { name: "product", path: '/product' },
]

const Header = () => {
  return (
    <header className="sticky top-0 py-3 bg-purple-200">
      <div className="container">
        <div className="flex items-center gap-3 justify-between">
          <Link to="/" className="font-bold text-2xl uppercase">Logo</Link>
          <ul className="flex items-center gap-3 capitalize">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header