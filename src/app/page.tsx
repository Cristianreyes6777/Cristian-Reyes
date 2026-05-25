import { Hero } from "@/components/site/Hero";
import { CryptedSpotlight } from "@/components/site/CryptedSpotlight";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Archive } from "@/components/site/Archive";
import { Skills } from "@/components/site/Skills";
import { ContactFooter } from "@/components/site/ContactFooter";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cristian Reyes",
  url: "https://www.cristianreyes.io",
  image: "https://www.cristianreyes.io/opengraph-image",
  jobTitle: "CEO & Founder, Crypted",
  worksFor: [
    {
      "@type": "Organization",
      name: "Crypted",
      url: "https://crypted.ai",
    },
    {
      "@type": "Organization",
      name: "Pfizer",
    },
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Boston University",
    },
    {
      "@type": "EducationalOrganization",
      name: "Rutgers University",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  knowsLanguage: ["English", "Spanish", "Italian"],
  sameAs: [
    "https://linkedin.com/in/cristian-estiben-reyes",
    "https://github.com/Cristianreyes6777",
  ],
  email: "cristianreyes6777@gmail.com",
  description:
    "Founder, scientist, and engineer working where biology, AI, and software meet.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <CryptedSpotlight />
      <About />
      <Experience />
      <Projects />
      <Archive />
      <Skills />
      <ContactFooter />
    </>
  );
}
