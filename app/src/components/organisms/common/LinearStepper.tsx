import { Step, StepLabel, Stepper } from "@mui/material";
import { FC, ReactNode, memo } from "react";
import { useRecoilValue } from "recoil";
import { questionStepState } from "../../../store/questionStepState";

const steps = [...Array(5)].map((_, i) => i + 1);

export const LinearStepper: FC = memo(() => {
  const activeStep = useRecoilValue(questionStepState);

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: {
          optional?: ReactNode;
        } = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}></StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
});
