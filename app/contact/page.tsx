import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '../components/PageWrapper';
import WhatsappLink from '@/components/Contact/WhatsApp';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Shoaib Shamrez via email @ shoaibshamrez@gmail.com',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can Contact me at:</p>
          <EmailLink />
          <WhatsappLink />
        </div>
        <ContactIcons />
      </article>
    </PageWrapper>
  );
}
