import { useState } from 'react';
import { contactLinks } from '../../data/portfolio';
import SectionHeader from '../SectionHeader/SectionHeader';
import Reveal from '../Reveal/Reveal';
import './Contact.css';

export default function Contact() {
  const [toast, setToast] = useState('');

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2500);
  };

  const handleClick = (e, link) => {
    if (link.copyValue) {
      e.preventDefault();
      navigator.clipboard.writeText(link.copyValue).then(() => {
        showToast(`Copied ${link.label}!`);
      });
    }
  };

  const linksWithCopy = contactLinks.map((link) => {
    if (link.href.startsWith('mailto:')) {
      return { ...link, copyValue: link.href.replace('mailto:', '') };
    }
    if (link.href.startsWith('tel:')) {
      return { ...link, copyValue: link.label };
    }
    return link;
  });

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeader prompt="ssh contact@shirisha" title="Get in Touch" />

        <Reveal delay={100}>
          <p className="contact__hint">
            Click email or phone to copy · External links open in a new tab
          </p>

          <div className="contact__links">
            {linksWithCopy.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="contact__pill"
                style={{ '--pill-delay': `${i * 60}ms` }}
                onClick={(e) => handleClick(e, link)}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="contact__icon">{link.icon}</span>
                <span className="contact__label">{link.label}</span>
                {link.copyValue && <span className="contact__copy-hint">click to copy</span>}
              </a>
            ))}
          </div>
        </Reveal>

        {toast && (
          <div className="contact__toast" role="status">
            {toast}
          </div>
        )}
      </div>
    </section>
  );
}
