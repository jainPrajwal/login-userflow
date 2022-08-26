import { useState } from "react";
import { AppData } from "../constants/data.types";
import { useData } from "../hooks/useData";
import { useFormCheck } from "../hooks/useFormCheck";

const handlersFactory = {
  onFocusHandler: ({ setFormState, field }: {
    setFormState: React.Dispatch<React.SetStateAction<{
      name: {
        isTouched: boolean;
        errorMessage: string;
        isValid: boolean;
      };
      url: {
        isTouched: boolean;
        errorMessage: string;
        isValid: boolean;
      };
    }>>
    field: `name` | `url`
  }) => {


    setFormState(prevState => ({
      ...prevState, [field]: {
        ...prevState[field],
        isTouched: true,

      }
    }))



  }
  ,
  onChangeHandler: ({ e, setAppData, field }: {
    e: React.ChangeEvent<HTMLInputElement>,
    setAppData: React.Dispatch<React.SetStateAction<AppData>>

    field: `name` | `url`
  }) => {
    setAppData(prevState => {
      return {
        ...prevState,
        userData: {
          ...prevState.userData,
          workspace: {
            ...prevState.userData.workspace,
            [field]: e.target.value
          }
        }
      }
    })

  },


  onBlurHandler: ({ e, setAppData, setFormState, field }: {
    e: React.FocusEvent<HTMLInputElement, Element>,
    setAppData: React.Dispatch<React.SetStateAction<AppData>>
    setFormState: React.Dispatch<React.SetStateAction<{
      name: {
        isTouched: boolean;
        errorMessage: string;
        isValid: boolean;
      };
      url: {
        isTouched: boolean;
        errorMessage: string;
        isValid: boolean;
      };
    }>>
    field: `name` | `url`
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




  }
  ,
  onBlurOptionsHandler: ({ e, setAppData, setFormState, field }: {
    e: React.FocusEvent<HTMLInputElement, Element>,
    setAppData: React.Dispatch<React.SetStateAction<AppData>>
    setFormState: React.Dispatch<React.SetStateAction<{
      name: {
        isTouched: boolean;
        errorMessage: string;
        isValid: boolean;
      };
      url: {
        isTouched: boolean;
        errorMessage: string;
        isValid: boolean;
      };
    }>>
    field: `name` | `url`
  }) => {
    setFormState(prevState => {
      return {
        ...prevState,
        url: {
          ...prevState.url,
          isValid: false,
          errorMessage: `Name cannot be blank`
        }
      }
    })


    if (e.target.value.match(/^https:\/\/.|http:\/\/./) || e.target.value.length <= 0) {

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
          url: {
            ...prevState.url,
            isValid: true,
            errorMessage: ``
          }
        }
      })
    } else {
      setFormState(prevState => {
        return {
          ...prevState,
          url: {
            ...prevState.url,
            isValid: false,
            errorMessage: `URL should start with https:// or http://`
          }
        }
      })
      setAppData(prevState => {
        return {
          ...prevState,
          validations: {
            isFormValid: false,
          }
        }
      })
    }
  }
}


const initialFormState = {
  name: {
    isTouched: false,
    errorMessage: ``,
    isValid: false,

  },
  url: {
    isTouched: false,
    errorMessage: ``,
    isValid: true,
  }
}


export const Workspace = () => {
  const { appData: { userData: { workspace: { name, url } } }, setAppData } = useData();


  const [formState, setFormState] = useState(initialFormState);

  const { onFocusHandler, onChangeHandler, onBlurHandler, onBlurOptionsHandler } = handlersFactory;
  useFormCheck();
  return <section className='d-flex f-direction-col ai-center w-100'>


    <h1 className='header-primary'>Let&#x27;s set up a home for all of your work</h1>
    <p className='text-secondary text-center py-md'>You can always create another workspace later.</p>

    <div className='w-80'>
      <form action="">
        <div className='d-flex f-direction-col p-md'>
          <label htmlFor="workspace-name" className='my-sm text-bold'>
            Workspace Name
          </label>
          <input type="text"
            value={name || ``}
            style={{
              outline: formState.name.errorMessage ? `1px solid var(--flow-error)` : ``
            }}
            onFocus={() => {
              onFocusHandler({ setFormState, field: `name` })
            }}

            onChange={(e) => {
              onChangeHandler({ e, setAppData, field: `name` })
            }}

            onBlur={(e) => {
              onBlurHandler({
                e,
                setAppData,
                setFormState,
                field: `name`
              })
            }}

            id='workspace-name'
            className='input p-lg'
            placeholder='Eden'
          />

          {!formState.name.isValid && formState.name.isTouched && <div className="text-error">{
            formState.name.errorMessage
          }</div>}
        </div>

        <div className='d-flex f-direction-col p-md pos-rel'>
          <label htmlFor="workspace-name" className='my-sm '>
            <span className='text-bold'>Workspace URL</span>
            <span className='text-secondary ml-sm'>(optional)</span>
          </label>
          <div className='d-flex'>
            <div className='input-url d-flex ai-center p-lg bg-disabled'>
              <div>www.example.com/</div>
            </div>
            <input type="url" name="url"
              value={url}
              style={{
                outline: formState.url.errorMessage ? `1px solid var(--flow-error)` : ``
              }}


              onFocus={() => {
                onFocusHandler({ setFormState, field: `url` })
              }}

              onChange={(e) => {
                onChangeHandler({
                  e,
                  setAppData,
                  field: `url`
                })
              }}

              onBlur={(e) => {
                onBlurOptionsHandler({
                  e, field: `url`, setAppData, setFormState
                })
              }
              }

              id='workspace-url'
              className='input p-lg w-100'
              placeholder='Example'

            />
          </div>

          {!formState.url.isValid && formState.url.isTouched && <div className="text-error">{
            formState.url.errorMessage
          }</div>}
        </div>
      </form>
    </div>
  </section>

}