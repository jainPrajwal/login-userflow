import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import { useFormCheck } from "../hooks/useFormCheck";

export const Welcome = () => {
    const { appData: { userData: { displayName, fullName } }, setAppData } = useData();

    useFormCheck();


    const [formState, setFormState] = useState({
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
    })
    return <><section className='d-flex f-direction-col ai-center w-100'>


        <h1 className='header-primary'>Welcome! First things first...</h1>
        <p className='text-secondary text-center py-md'>You can always change them later.</p>
        <div className=''>

        </div>
        <div className='w-80'>
            <form action="">
                <div className='d-flex f-direction-col p-md'>
                    <label htmlFor="workspace-name" className='my-sm text-bold'>
                        Full Name
                    </label>
                    <input type="text"
                        value={fullName || ``}
                        style={{
                            outline: formState.fullName.errorMessage ? `1px solid var(--flow-error)` : ``
                        }}

                        onFocus={() => {


                            setFormState(prevState => ({
                                ...prevState, fullName: {
                                    ...prevState.fullName,
                                    isTouched: true,

                                }
                            }))



                        }}

                        onChange={(e) => {
                            setAppData(prevState => {
                                return {
                                    ...prevState,
                                    userData: {
                                        ...prevState.userData,
                                        fullName: e.target.value
                                    }
                                }
                            })

                        }}

                        onBlur={(e) => {

                            if (e.target.value.length <= 0) {
                                setFormState(prevState => {
                                    return {
                                        ...prevState,
                                        fullName: {
                                            ...prevState.fullName,
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
                                            fullName: {
                                                ...prevState.fullName,
                                                isValid: true,
                                                errorMessage: ``
                                            }
                                        }
                                    })
                                } else {
                                    setFormState(prevState => {
                                        return {
                                            ...prevState,
                                            fullName: {
                                                ...prevState.fullName,
                                                isValid: false,
                                                errorMessage: `Name cannot contain anything except letters`
                                            }
                                        }
                                    })
                                }
                            }




                        }}
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

                        onFocus={() => {


                            setFormState(prevState => ({
                                ...prevState, displayName: {
                                    ...prevState.displayName,
                                    isTouched: true,

                                }
                            }))



                        }}

                        onChange={(e) => {
                            setAppData(prevState => {
                                return {
                                    ...prevState,
                                    userData: {
                                        ...prevState.userData,
                                        displayName: e.target.value
                                    }
                                }
                            })

                        }}

                        onBlur={(e) => {

                            if (e.target.value.length <= 0) {
                                setFormState(prevState => {
                                    return {
                                        ...prevState,
                                        displayName: {
                                            ...prevState.displayName,
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
                                            displayName: {
                                                ...prevState.displayName,
                                                isValid: true,
                                                errorMessage: ``
                                            }
                                        }
                                    })
                                } else {
                                    setFormState(prevState => {
                                        return {
                                            ...prevState,
                                            displayName: {
                                                ...prevState.displayName,
                                                isValid: false,
                                                errorMessage: `Name cannot contain numbers`
                                            }
                                        }
                                    })
                                }
                            }




                        }}


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