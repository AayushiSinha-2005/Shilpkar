import PageBanner from "../../components/Hero/PageBanner";
import SectionIntro from "../../components/Common/SectionIntro";
import FeatureGrid from "../../components/Common/FeatureGrid";
import images from "../../data/images";

export default function InstallationTraining() {
  return (
    <>
      <PageBanner
        eyebrow="FRANCHISE PROGRAM"
        title="Professional Installation Training"
        image={images.projects[2].img}
        height="65vh"
      />

      <SectionIntro
        title="Become a Certified Installation Partner"
        subtitle="Learn professional installation techniques for premium ceiling, wall and flooring solutions through hands-on guidance from the Shilpkar Factory team."
      />

      <FeatureGrid
        title="Why Join Our Training Program?"
        cards={[
          {
            icon: "🎓",
            title: "Hands-on Learning",
            description:
              "Practical training with real products and live installation techniques.",
          },
          {
            icon: "🛠️",
            title: "Technical Skills",
            description:
              "Understand product handling, installation methods and best practices.",
          },
          {
            icon: "📜",
            title: "Certification",
            description:
              "Receive professional training certification and ongoing technical support.",
          },
        ]}
      />
    </>
  );
}