import { Link } from 'react-router-dom';

function BasicNav() {
    return (
        <ul className="menu glass rounded-box w-56 bg-opacity-30">
        <li>
          <Link to="/Basics/Equaliser">Equaliser</Link>
        </li>
        <li>
          <Link to="/Basics/Compressor">Compressor</Link>
        </li>
        <li>
          <Link to="/Basics/Delay">Delay</Link>
        </li>
        <li>
          <Link to="/Basics/Reverb">Reverb</Link>
        </li>
      </ul>
    );
}

export default BasicNav;