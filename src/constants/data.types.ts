export type AppData = {
  steps: Array<JSX.Element>;
  currentStep: number;
  validations: {
    isFormValid: boolean;
    message: string;
  };
};
