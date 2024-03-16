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
import classes from "../lib/classesContent";

export default function VerticalLinearStepper({
  color,
  gradeIndex,
  subjectIndex,
}: {
  color?: string;
  gradeIndex: number;
  subjectIndex: number;
}) {
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
        {classes[gradeIndex].matieres[subjectIndex].content.map(
          (step, index) => (
            <Step key={index}>
              <StepButton
                onClick={handleStep(index)}
                icon={<IoCube className="ml-1" color={color} />}
              >
                {step}{" "}
              </StepButton>

              {/* {<StepContent className="mt-6">
              <Typography>{step.description}</Typography>
            </StepContent>} */}
            </Step>
          )
        )}
      </Stepper>
    </Box>
  );
}
