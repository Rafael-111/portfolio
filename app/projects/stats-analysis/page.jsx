import ProjectPage, { Section, Gallery, Docs } from "../../components/ProjectPage";

export const metadata = { title: "Predicting Caffeine Intake · Rafael Petrosian" };

export default function StatsPage() {
  return (
    <ProjectPage
      title="Predicting Caffeine Intake"
      meta="UC Berkeley course project · Python"
      oneLiner="Can a student's lifestyle predict how much caffeine they drink? I built Python models to find out."
      did={[
        "Built linear regression, neural network, and random forest models in Python.",
        "Engineered features, tuned the models, and cross-validated them.",
        "Found that random forests predicted best, which means the factors interact in non-linear ways.",
      ]}
    >
      <Section title="Training">
        <Gallery
          cols={1}
          items={[{ src: "/img/stats-curves.webp", alt: "Training and validation loss and accuracy curves", caption: "Training and validation curves." }]}
        />
      </Section>
      <Section title="Full report">
        <Docs items={[{ label: "Statistical analysis report", href: "/Statistical%20Analysis%20Project.pdf", note: "PDF" }]} />
      </Section>
    </ProjectPage>
  );
}
