import { createContext, useState } from "react";
import { Final } from "../components/Final";
import { Setup } from "../components/Setup";
import { Welcome } from "../components/Welcome";
import { Workspace } from "../components/Workspace";
import { AppData } from "../constants/data.types";

const DataContext = createContext<{
    appData: AppData,
    setAppData: React.Dispatch<React.SetStateAction<AppData>>
}>({
    appData: {} as AppData,
    setAppData: () => { },
});


export const steps = [<Welcome

/>, <Workspace />, <Setup />, <Final />];


const DataProvider = ({ children }: { children: any }) => {
    const [appData, setAppData] = useState<AppData>({
        steps,
        currentStep: 1,
        validations: {
            isFormValid: false,
            message: ``
        }
    })
    return <DataContext.Provider value={{ appData, setAppData }} >{children}</DataContext.Provider>
}

export { DataContext, DataProvider }