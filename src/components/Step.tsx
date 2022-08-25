import { useData } from "../hooks/useData"

export const Step = () => {
    const { appData: { steps, currentStep } } = useData();
    return steps[currentStep - 1]
}