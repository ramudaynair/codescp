import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Testimonials from '@/components/sections/Testimonials';
import MidCTA from '@/components/sections/MidCTA';
import CaseHighlight from '@/components/sections/CaseHighlight';
import TeamPreview from '@/components/sections/TeamPreview';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesPreview />
      <Testimonials />
      <MidCTA />
      <CaseHighlight />
      <TeamPreview />
      <FAQ />
      <CTA />
    </>
  );
}
