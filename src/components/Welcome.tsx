import { useState } from "react";
import { AppData } from "../constants/data.types";
import { useData } from "../hooks/useData";
import { useFormCheck } from "../hooks/useFormCheck";


const handlerFactory = {
    onFocusHandler: ({ setFormState, field }: {
        setFormState: React.Dispatch<React.SetStateAction<{
            fullName: {
                isTouched: boolean;
                errorMessage: string;
                isValid: boolean;
            };
            displayName: {
                isTouched: boolean;
                errorMessage: string;
                isValid: boolean;
            };
        }>>,
        field: `fullName` | `displayName`
    }) => {


        setFormState(prevState => ({
            ...prevState, [field]: {
                ...prevState[field],
                isTouched: true,

            }
        }))



    },


    onBlurHandler: ({ e, setFormState, setAppData, field }: {
        e: React.FocusEvent<HTMLInputElement, Element>,
        setFormState: React.Dispatch<React.SetStateAction<{
            fullName: {
                isTouched: boolean;
                errorMessage: string;
                isValid: boolean;
            };
            displayName: {
                isTouched: boolean;
                errorMessage: string;
                isValid: boolean;
            };
        }>>
        setAppData: React.Dispatch<React.SetStateAction<AppData>>
        field: `fullName` | `displayName`
    }) => {

        if (e.target.value.length <= 0) {
            setFormState(prevState => {
                return {
                    ...prevState,
                    [field]: {
                        ...prevState[field],
                        isValid: false,
                        errorMessage: `Name cannot be blank`
                    }
                }
            })
        } else {

            if (e.target.value.match(/^[a-zA-Z_]+$/)) {
                setAppData(prevState => {
                    return {
                        ...prevState,
                        validations: {
                            isFormValid: true,

                        }
                    }
                })

                setFormState(prevState => {
                    return {
                        ...prevState,
                        [field]: {
                            ...prevState[field],
                            isValid: true,
                            errorMessage: ``
                        }
                    }
                })
            } else {
                setFormState(prevState => {
                    return {
                        ...prevState,
                        [field]: {
                            ...prevState[field],
                            isValid: false,
                            errorMessage: `Name cannot contain anything except letters`
                        }
                    }
                })
            }
        }




    },


    onChangeHandler: ({ e, setAppData, field }: { e: React.ChangeEvent<HTMLInputElement>, setAppData: React.Dispatch<React.SetStateAction<AppData>>, field: string }) => {
        setAppData(prevState => {
            return {
                ...prevState,
                userData: {
                    ...prevState.userData,
                    [field]: e.target.value
                }
            }
        })

    }
}



const initialFormState = {
    fullName: {
        isTouched: false,
        errorMessage: ``,
        isValid: false,

    },
    displayName: {
        isTouched: false,
        errorMessage: ``,
        isValid: false,
    }
}



export const Welcome = () => {
    const { appData: { userData: { displayName, fullName } }, setAppData } = useData();


    const { onBlurHandler, onChangeHandler, onFocusHandler } = handlerFactory;

    useFormCheck();



    const [formState, setFormState] = useState(initialFormState)
    return <><section className='d-flex f-direction-col ai-center w-100'>


        <h1 className='header-primary'>Welcome! First things first...</h1>
        <p className='text-secondary text-center py-md'>You can always change them later.</p>

        <div className='w-80'>
            <form >
                <div className='d-flex f-direction-col p-md'>
                    <label htmlFor="workspace-name" className='my-sm text-bold'>
                        Full Name
                    </label>
                    <input type="text"
                        value={fullName || ``}
                        style={{
                            outline: formState.fullName.errorMessage ? `1px solid var(--flow-error)` : ``
                        }}

                        onFocus={() => { onFocusHandler({ setFormState, field: `fullName` }) }}

                        onChange={(e) => { onChangeHandler({ e, setAppData, field: `fullName` }) }}

                        onBlur={(e) => { onBlurHandler({ e, setFormState, setAppData, field: `fullName` }) }}

                        
                        id='workspace-name'
                        className='input p-lg'
                        placeholder='Eden'
                    />

                    {!formState.fullName.isValid && formState.fullName.isTouched && <div className="text-error">{
                        formState.fullName.errorMessage
                    }</div>}
                </div>

                <div className='d-flex f-direction-col p-md pos-rel'>
                    <label htmlFor="workspace-name" className='my-sm '>
                        <p className='text-bold'>Display Name</p>

                    </label>


                    <input type="text"
                        style={{
                            outline: formState.displayName.errorMessage ? `1px solid var(--flow-error)` : ``
                        }}
                        value={displayName || ``}



                        onFocus={() => { onFocusHandler({ setFormState, field: `displayName` }) }}

                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChangeHandler({ e, setAppData, field: `displayName` }) }}

                        onBlur={(e: React.FocusEvent<HTMLInputElement, Element>) => { onBlurHandler({ e, setFormState, setAppData, field: `displayName` }) }}


                        id='workspace-name'
                        className='input p-lg w-100'
                        placeholder='Example'

                    />
                    {!formState.displayName.isValid && formState.displayName.isTouched && <div className="text-error">{
                        formState.displayName.errorMessage
                    }</div>}
                </div>

            </form>
        </div>
    </section></>
}