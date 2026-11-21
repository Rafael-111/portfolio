import ProjectPage, { Section, Gallery, Docs, DeepDive, Prose, P, Specs, Bullets } from "../../components/ProjectPage";

export const metadata = { title: "Predicting Caffeine Intake · Rafael Petrosian" };

export default function StatsPage() {
  return (
    <ProjectPage
      title="Predicting Caffeine Intake"
      meta="Team of 4 · UC Berkeley course project · Fall 2024 · Python"
      oneLiner="Can a student's lifestyle predict how much caffeine they drink? I built Python models to find out."
      stats={[
        { value: "500", label: "students in the dataset" },
        { value: "5", label: "model types built and compared" },
        { value: "0.757", label: "R² for the best model, a random forest" },
        { value: "0.023", label: "R² for plain linear regression" },
      ]}
      did={[
        "Cleaned and prepared the dataset in Python with pandas: engineered sleep-duration features and encoded the categorical variables.",
        "Built and compared linear regression, LASSO, a neural network (MLP), a convolutional network (CNN), and a random forest.",
        "Wrote the linear regression by hand from the normal equations, then compared it with the library version.",
        "Tuned each model with grid search and cross-validation.",
        "Found that the random forest predicted best by a wide margin, which means caffeine use depends on how factors interact, not on any one factor.",
      ]}
      hard="With only 500 rows, ten caffeine bins gave poor models, and no single feature predicted much (the best correlation was 0.08). I grouped intake into three classes and let the models combine features."
      result="The random forest explained about 76% of the variance (R² 0.757). Plain linear regression scored 0.023."
    >
      <Section title="Results">
        <Specs
          head={["Model", "R²", "MSE", "MAE"]}
          rows={[
            ["Linear regression (OLS)", "0.023", "0.515", "0.639"],
            ["Linear regression (LASSO)", "-5.073", "3.204", "1.636"],
            ["Neural network (MLP)", "-0.760", "0.515", "0.639"],
            ["Neural network (CNN)", "-0.437", "0.758", "0.538"],
            ["Random forest", "0.757", "0.128", "0.096"],
          ]}
          note="Higher R² is better; 1.0 is a perfect fit and anything below 0 is worse than guessing the average."
        />
      </Section>

      <DeepDive />

      <Section title="The question and the data">
        <Prose>
          <P text="We used a dataset of **500 university students** with 14 variables: age, gender, university year, sleep duration and timing, study hours, screen time, physical activity, sleep quality, and the number of caffeinated drinks per day. The goal was to predict caffeine intake from the other variables and see which approach does it best." />
        </Prose>
      </Section>

      <Section title="Cleaning and feature work">
        <Bullets
          items={[
            "Computed weekday and weekend **sleep duration** from the start and end times, handling sleep that crosses midnight, then dropped the raw time columns.",
            "Dropped **Student ID** as irrelevant and **Sleep Quality** as subjective junk data, since what counts as good sleep differs from person to person.",
            "Encoded gender and university year as integers so the models could use them.",
            "**Simplified the target.** Ten caffeine bins with only 500 rows gave poor models, so I grouped intake into three classes: light (0 to 2 drinks), medium (3 to 4), and heavy (more than 4).",
          ]}
        />
        <Prose>
          <div className="mt-4">
            <P text="A correlation matrix showed that no single feature drives caffeine use. The strongest, weekday sleep duration, had a correlation of only **0.08**. That told us early that a model would have to combine features to predict anything." />
          </div>
        </Prose>
      </Section>

      <Section title="The five models">
        <Specs
          head={["Model", "How it was built and tuned"]}
          rows={[
            ["OLS regression", "Written by hand: centered the inputs and outputs, then solved θ = (XᵀX)⁻¹XᵀY for the parameters and the intercept."],
            ["LASSO regression", "Scikit-learn, with 5-fold cross-validated grid search over regularization strength. Best α was 2.07."],
            ["MLP neural network", "Grid search over 648 combinations (batch size, epochs, activation, dropout, layer width, optimizer) with 3-fold cross-validation. Best: one 256-neuron tanh layer, 0.2 dropout, Adam, batch 32, 50 epochs."],
            ["1-D CNN", "Same architecture and settings as the MLP, to see whether convolution helps on these features."],
            ["Random forest", "Swept 10 to 500 trees and two feature-sampling rules. Trained on a 90/10 train-test split with a fixed random seed for reproducibility."],
          ]}
        />
      </Section>

      <Section title="What the training curves showed">
        <Prose>
          <P text="The MLP's validation loss leveled off early with a small gap to training loss, so it wasn't overfitting, and its metrics stopped improving at around 20 epochs. The CNN started to overfit: validation loss fell for about 10 epochs and then rose while training loss kept dropping. For future runs, I would stop the MLP near 20 epochs and the CNN near 10." />
        </Prose>
        <div className="mt-5">
          <Gallery
            cols={1}
            items={[{ src: "/img/stats-curves.webp", alt: "Training and validation loss and accuracy curves", caption: "Training and validation curves for the two neural networks." }]}
          />
        </div>
      </Section>

      <Section title="What it means, and the caveats">
        <Prose>
          <P text="Linear models failed because caffeine use isn't a straight-line function of any one habit. The **random forest** captured interactions between variables, for example how screen time, study hours, and sleep combine, and explained about 76% of the variance in the held-out data." />
          <P text="Some honest caveats. With 500 rows, the 10% test set is only 50 students, so the random forest's score has real uncertainty, and the grid search picked a small forest (10 trees). The neural networks likely lost because of the small dataset and limited tuning, not because the approach is wrong. A larger dataset is the obvious next step." />
        </Prose>
      </Section>

      <Section title="Full report">
        <Docs items={[{ label: "Statistical analysis report", href: "/Statistical%20Analysis%20Project.pdf", note: "PDF" }]} />
      </Section>
    </ProjectPage>
  );
}
