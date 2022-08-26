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

export const IMAGES_URL = {
  MYSELF: `https://res.cloudinary.com/dmk11fqw8/image/upload/v1661355693/User_dieqap.jpg`,
  TEAM: `https://res.cloudinary.com/dmk11fqw8/image/upload/v1661355693/Users_qzn6xb.png`,
  SIGNUP_SUCCESSFULL: `https://res.cloudinary.com/dmk11fqw8/image/upload/v1661359217/Success_c3d1nc.png`,
  LOGO: `https://res.cloudinary.com/dmk11fqw8/image/upload/v1661347157/Icon_onjsgk.jpg`,
};
