import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";

function getSteps() {
  return ["Personal Details","Project Description", "Target and Timestamps"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return `This requires you to fill up the fields that helps us identify your project as a genuine one and which will help people contributing to your project get in contact with you. The personal details can be hidden from public view. This also ensures that the money raised is directed to your account linked to the chain only without passing by any third-parties.`;

    case 1:
      return `This step invloves you with providing indepth details regarding your project. Supplement it with an attractive cover image which depicts your project. State your cause along with the benefits if any the contributors will receive. This ensures that your project pitch is successful and attracts more people. All these details will be visible to any customer viewing your page.`;

    case 2:
      return `This asks you to specify your target amount, along with the timestamps required so that the money raised is in stages and so that your project is funded throughout.`;

    default:
      return ``;
  }
}

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4}>
        {activeStep === steps.length ? (
          <Box>
            <Typography>All steps completed</Typography>

            <Button sx={{ mt: 2 }} variant="contained" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        ) : (
          <Box>
            <Typography>{getStepContent(activeStep)}</Typography>

            <Box pt={2}>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>

              <Button sx={{ ml: 2 }} variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
