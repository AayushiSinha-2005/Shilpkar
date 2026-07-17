import PageBanner from "../../components/Hero/PageBanner";
import SectionIntro from "../../components/Common/SectionIntro";
import FeatureGrid from "../../components/Common/FeatureGrid";
import images from "../../data/images";

export default function Associate() {
  return (
    <>
      <PageBanner
        eyebrow="FRANCHISE PROGRAM"
        title="Become a Shilpkar Associate"
        image={images.projects[1].img}
        height="65vh"
      />

      <SectionIntro
        title="Work & Grow with Shilpkar Factory"
        subtitle="Join our associate network and become a part of India's growing premium interior solutions brand. Collaborate with us to deliver innovative products and exceptional customer experiences."
      />

      <FeatureGrid
        title="Why Become an Associate?"
        cards={[
          {
            icon: "🤝",
            title: "Business Opportunities",
            description:
              "Expand your network and work on premium interior projects.",
          },
          {
            icon: "📈",
            title: "Professional Growth",
            description:
              "Access new opportunities through our growing business network.",
          },
          {
            icon: "🏆",
            title: "Dedicated Support",
            description:
              "Receive continuous guidance from our experienced team.",
          },
        ]}
      />
    </>
  );
}