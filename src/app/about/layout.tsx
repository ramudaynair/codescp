import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - CODESCAPE',
  description: 'Learn about our mission, vision, and commitment to digital excellence',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
