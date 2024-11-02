import houseIcon from '../assets/house-fill.svg';
import { Link } from "react-router-dom";

export function NavBar() {
  return (
  <div className="navbar bg-base-100 bg-navColour bg-opacity-10 active-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 bg-navColour rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Background</a></li>
          <li>
          <summary><Link to="Basics"><a>Basics</a></Link></summary>
            <ul className="p-2">
              <li><Link to="/Basics/Equaliser">Equaliser</Link></li>
              <li><Link to="/Basics/Compressor">Compressor</Link></li>
              <li><Link to="/Basics/Delay">Delay</Link></li>
              <li><Link to="/Basics/Reverb">Reverb</Link></li>
            </ul>
          </li>
          <li>
          <summary><Link to="Advanced"><a>Advanced</a></Link></summary>
            <ul className="p-2">
              <li><Link to="/Advanced/Chorus">Equaliser</Link></li>
              <li><Link to="/Advanced/Distortion">Compressor</Link></li>
              <li><Link to="/Advanced/ConvoReverb">Delay</Link></li>
              <li><Link to="/Advanced/PreReverb">Reverb</Link></li>
            </ul>
          </li>
        </ul>
      </div>
        <li><Link to="/"><a>
          <img className="btn btn-ghost fill-text" src={houseIcon} alt="Soundo" /> 
        </a></Link></li>
        <div className="ml-2 font-calistoga text-xl">Soundo</div> 
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="Background"><a>Background</a></Link></li>
        <li>
          <details>
            <summary><Link to="Basics"><a>Basics</a></Link></summary>
            <ul className="p-2 bg-navColour">
              <li><Link to="/Basics/Equaliser">Equaliser</Link></li>
              <li><Link to="/Basics/Compressor">Compressor</Link></li>
              <li><Link to="/Basics/Delay">Delay</Link></li>
              <li><Link to="/Basics/Reverb">Reverb</Link></li>
            </ul>
          </details>
        </li>
        <li>
        <details>
            <summary><Link to="Advanced"><a>Advanced</a></Link></summary>
            <ul className="p-2 bg-navColour">
              <li><Link to="/Advanced/Chorus">Equaliser</Link></li>
              <li><Link to="/Advanced/Distortion">Compressor</Link></li>
              <li><Link to="/Advanced/ConvoReverb">Delay</Link></li>
              <li><Link to="/Advanced/PreReverb">Reverb</Link></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
</div>
  );
}

export default NavBar;