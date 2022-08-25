import { useData } from "../hooks/useData";
import "./Stepbar.css";
const Stepbar = () => {
    const { appData: { currentStep, steps }, setAppData } = useData();
    return <>

        <ul className="progressbar">
            {
                steps.map((step, index) => {
                    return (

                        <li className={` ${currentStep > index ? `active cursor-pointer` : ``}`} key={index}

                            onClick={() => {
                                if (currentStep > index) {
                                    setAppData(prevState => {
                                        return {
                                            ...prevState,
                                            currentStep: index + 1
                                        }
                                    })
                                } 

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