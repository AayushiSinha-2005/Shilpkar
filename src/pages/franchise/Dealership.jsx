import PageBanner from "../../components/Hero/PageBanner";
import SectionIntro from "../../components/Common/SectionIntro";
import FeatureGrid from "../../components/Common/FeatureGrid";
import images from "../../data/images";

export default function Dealership() {
  return (
    <>
      <PageBanner
        eyebrow="FRANCHISE PROGRAM"
        title="Become an Authorized Dealership Partner"
        image={images.projects[0].img}
        height="65vh"
      />

      <SectionIntro
        title="Welcome to the Shilpkar Dealer Network"
        subtitle="Join one of India's emerging premium interior brands and grow your business with innovative ceiling, wall, flooring and decorative solutions."
      />

      <FeatureGrid
        title="Why Become Our Dealership Partner?"
        cards={[
          {
            icon: "🤝",
            title: "Business Support",
            description:
              "Complete guidance for sales, project execution and customer handling.",
          },
          {
            icon: "📈",
            title: "Marketing Assistance",
            description:
              "Branding support, brochures and lead generation assistance.",
          },
          {
            icon: "🛠️",
            title: "Technical Training",
            description:
              "Product knowledge, installation guidance and continuous technical support.",
          },
        ]}
      />
    </>
  );
}