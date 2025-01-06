// src/components/layout/Footer.jsx
import React from 'react';
import HackerText from '../../components/ui/HackerText';
import { withComingSoon } from '../../components/ui/ComingSoonPopup';

const FooterLink = ({ children }) => (
  <li className="text-green-400/80 hover:text-green-400 cursor-pointer">
    {children}
  </li>
);

const ComingSoonLink = withComingSoon(FooterLink);

const Footer = () => {
  const sections = [
    {
      title: "// ZERO Protocol",
      items: ["Neural Network Evolution"]
    },
    {
      title: "// Quick Access",
      items: ["> Documentation", "> Whitepaper", "> Audit"]
    },
    {
      title: "// Community",
      items: ["> Discord", "> Telegram", "> Twitter"]
    },
    {
      title: "// Network",
      items: ["> Explorer", "> Statistics", "> Analytics"]
    }
  ];

  return (
    <footer className="border-t border-green-500/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 font-mono">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-green-500 font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <ComingSoonLink key={i}>
                    <HackerText text={item} />
                  </ComingSoonLink>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;