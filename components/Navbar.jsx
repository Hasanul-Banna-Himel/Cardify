export default function Navbar() {
    return (
      <div className="navbar bg-secondary text-secondary-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Cardify</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a>Home</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
  