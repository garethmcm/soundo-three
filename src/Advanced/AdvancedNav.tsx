import { Link } from 'react-router-dom';

function AdvancedNav() {
    return (
        <ul className="menu glass rounded-box w-56 bg-opacity-30">
        <li>
          <Link to="/Advanced/Chorus">Chorus</Link>
        </li>
        <li>
          <Link to="/Advanced/Distortion">Distortion</Link>
        </li>
        <li>
          <Link to="/Advanced/ConvoReverb">ConvoReverb</Link>
        </li>
        <li>
          <Link to="/Advanced/PreReverb">Pre Reverb</Link>
        </li>
      </ul>
    );
}

export default AdvancedNav;