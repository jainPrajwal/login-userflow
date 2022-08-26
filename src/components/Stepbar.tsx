import { AppData } from "../constants/data.types";
import { useData } from "../hooks/useData";
import "./Stepbar.css";

const onClickHandler = ({ currentStep, index, setAppData }: { currentStep: number, index: number, setAppData: React.Dispatch<React.SetStateAction<AppData>> }) => {
    if (currentStep > index) {
        setAppData(prevState => {
            return {
                ...prevState,
                currentStep: index + 1
            }
        })
    }

}


const Stepbar = () => {
    const { appData: { currentStep, steps }, setAppData } = useData();
    return <>

        <ul className="progressbar">
            {
                steps.map((step, index) => {
                    return (

                        <li className={` ${currentStep > index ? `active cursor-pointer` : ``}`} key={index}

                            onClick={(e) => {
                                onClickHandler({
                                    currentStep,
                                    index,
                                    setAppData
                                })
                            }}
                        >
                            <span className="step-before">{index + 1}</span>

                        </li>

                    )
                })
            }
        </ul>

    </>
}

export { Stepbar }