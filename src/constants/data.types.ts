export type AppData = {
  steps: Array<JSX.Element>;
  currentStep: number;
  validations: {
    isFormValid: boolean;
   
 
  };
  userData: {
    fullName: string | null;
    displayName: string | null;
    workspace: {
      name: string | null;
      url?: string;
    };
    setup: `myself` | `team` | null;
  };
};
