import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: "Learn about Shoaib's personal and professional journey, including his skills, experiences, and achievements.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
