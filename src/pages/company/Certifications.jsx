import PageBanner from "../../components/Hero/PageBanner";
import SectionIntro from "../../components/Common/SectionIntro";
import FeatureGrid from "../../components/Common/FeatureGrid";
import images from "../../data/images";

export default function Certifications() {
  return (
    <>
      <PageBanner
        eyebrow="COMPANY DOCUMENTS"
        title="Certifications & Documentation"
        image={images.projects[3].img}
        height="65vh"
      />

      <SectionIntro
        title="Quality, Trust & Compliance"
        subtitle="Browse our company certifications, registrations and technical documents. Official files and downloadable PDFs will be available here."
      />

      <FeatureGrid
        title="Available Documents"
        cards={[
          {
            icon: "📄",
            title: "Company Profile",
            description:
              "Learn about Shilpkar Factory, our products and our services.",
          },
          {
            icon: "🏅",
            title: "ISO Certificates",
            description:
              "Quality management and certification documents will be available here.",
          },
          {
            icon: "📥",
            title: "Downloads",
            description:
              "Product brochures, warranty documents and technical data sheets.",
          },
        ]}
      />
    </>
  );
}