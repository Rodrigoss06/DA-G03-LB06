// src/components/Profile.jsx
import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Perfil</h1>
      <nav>
        <ul>
          <li><Link to="details">Detalles</Link></li>
          <li><Link to="settings">Configuración</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
