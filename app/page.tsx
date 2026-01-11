import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Full Stack Developer Portfolio and Personal Website of Shoaib Shamrez - showcasing projects, skills, and experience in web development.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About this site</Link>
            </h2>
            <p>
              A beautiful, responsive, statically-generated, react application written with modern
              TypeScript.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more <Link href="/about">about me</Link>,
          or you can check out my <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, view <Link href="/stats">site statistics</Link>,
          or <Link href="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available <a href="#">here</a>.
        </p>
      </article>
    </PageWrapper>
  );
}
