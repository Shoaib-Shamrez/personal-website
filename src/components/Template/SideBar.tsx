'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Shoaib Shamrez" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Shoaib Shamrez</h2>
          <p>
            <a href="mailto:shoaibshamrez@gmail.com">shoaibshamrez@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I'm Shoaib Shamrez. I am a Full-Stack Web Developer specializing in the{' '}
          <a href="https://react.dev/">MERN stack</a>, with experience in{' '}
          <a href="https://tailwindcss.com/">TailwindCSS</a>,{' '}
          <a href="https://mui.com/">Material UI</a>,{' '}
          <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>, and modern web
          technologies. I have contributed to projects like{' '}
          <a href="https://shoaibshamrez.netlify.app/uXL-LMS">uXL-LMS</a> and{' '}
          <a href="https://shoaibshamrez.netlify.app/uXL-POS">uXL-POS</a> under the{' '}
          <a href="https://shoaibshamrez.netlify.app/">uExel platform</a>, delivering dynamic and
          responsive applications as part of a collaborative team.
        </p>

        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Shoaib Shamrez <Link href="/">shoaibshamrez.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
