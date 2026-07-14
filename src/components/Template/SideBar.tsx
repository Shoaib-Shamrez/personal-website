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
          <Image
            src="/images/me.jpg"
            alt="Shoaib Shamrez - Best Web Developer"
            width={200}
            height={200}
            priority
          />
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
          Hi, I'm Shoaib Shamrez. I am a Full-Stack Engineer specializing in{' '}
          <a href="https://react.dev/">React</a>, <a href="https://nodejs.org/">Node.js</a>,{' '}
          <a href="https://www.typescriptlang.org/">TypeScript</a>, and{' '}
          <a href="https://www.postgresql.org/">PostgreSQL</a>. I've built end‑to‑end systems like{' '}
          <strong>Meta360</strong> — a multi‑tenant SaaS platform, live at{' '}
          <a href="https://app.meta360.dev/">app.meta360.dev</a>, that reconciles developer
          standups against GitHub commits and PRs using the Claude API, reducing manual status
          reporting to zero for the teams using it. I've also contributed to production products
          like <a href="https://shoaibshamrez.netlify.app/uXL-LMS">uXL‑LMS</a> and{' '}
          <a href="https://shoaibshamrez.netlify.app/uXL-POS">uXL‑POS</a> at{' '}
          <a href="https://shoaibshamrez.netlify.app/">uExel</a>, where I work as a Full‑Stack
          Engineer delivering responsive, maintainable applications in a collaborative team
          environment. I'm currently deepening my cloud infrastructure skills through onsite AWS
          Solutions Architect Associate training in Islamabad.
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
