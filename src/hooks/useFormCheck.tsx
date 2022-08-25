import { useEffect } from "react"
import { useData } from "./useData";

export const useFormCheck = () => {
    const { appData: { userData: { displayName, fullName, workspace }, currentStep }, setAppData } = useData();

    useEffect(() => {
        switch (currentStep) {
            case 1: if (displayName && fullName) {
                setAppData(prevState => {
                    return {
                        ...prevState,
                        validations: {
                            isFormValid: true
                        }
                    }
                })
            }
                break;

            case 2: if (workspace.name) {
                if (!workspace.url) {
                    setAppData(prevState => {
                        return {
                            ...prevState,
                            validations: {
                                isFormValid: true
                            }
                        }
                    })
                }
                if (workspace.url && workspace.url.match(/^https:\/\/.|http:\/\/./)) {
                    console.log(`MATCHED`)
                    setAppData(prevState => {
                        return {
                            ...prevState,
                            validations: {
                                isFormValid: true
                            }
                        }
                    })
                }

            }
                break;
            case 3: case 4: setAppData(prevState => {
                return {
                    ...prevState,
                    validations: {
                        isFormValid: true
                    }
                }
            })
        }

    }, [])
}