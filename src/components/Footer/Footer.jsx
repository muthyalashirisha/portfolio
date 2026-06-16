import { profile } from '../../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          $ echo &quot;built with precision · {profile.location}&quot;
        </p>
      </div>
    </footer>
  );
}
