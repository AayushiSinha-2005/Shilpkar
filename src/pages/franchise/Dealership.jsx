import PageBanner from "../../components/Hero/PageBanner";
import SectionIntro from "../../components/Common/SectionIntro";
import FeatureCards from "../../components/Franchise/FeatureCards";
import images from "../../data/images";

export default function Dealership() {
  return (
    <>
      <PageBanner
        eyebrow="Franchise Program"
        title="Become an Authorized Dealership Partner"
        description="Join Shilpkar Factory and represent a premium interior brand offering innovative ceiling, wall, flooring and decorative solutions across India."
        image={images.projects[0].img}
        height="65vh"
      />

      <SectionIntro
        title="Welcome to the Shilpkar Dealer Network"
        subtitle="Join one of India's emerging premium interior brands and grow your business with innovative ceiling, wall, flooring and decorative solutions. We provide complete product support, technical guidance and marketing assistance to help our partners succeed."
      />

      

    </>
  );
}