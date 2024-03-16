import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepButton from "@mui/material/StepButton";

import { IoCube } from "react-icons/io5";

const steps = [
  {
    label: "Cours1",
    description: `Description Cours 1 Description Cours 1 Description Cours 1 Description Cours 1`,
  },
  {
    label: "Cours2",
    description: `Description Cours 2 Description Cours 2 Description Cours 2 Description Cours 2`,
  },
  {
    label: "Cours3",
    description: `Description Cours 3 Description Cours 3 Description Cours 3 Description Cours 3`,
  },
];

export default function VerticalLinearStepper({ color }: { color?: string }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 700, marginLeft: 5, paddingY: 5 }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepButton
              onClick={handleStep(index)}
              icon={<IoCube className="ml-1" color={color} />}
            >
              {step.label}{" "}
            </StepButton>

            <StepContent className="mt-6">
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
