import React from 'react';
import './App.css';
import { Stepbar } from './components/Stepbar';

import { Step } from './components/Step';

import { useData } from './hooks/useData';
import { AppData, IMAGES_URL } from './constants/data.types';


const onClickHandler = ({ isFormValid, setAppData }: {
  isFormValid: boolean,
  setAppData: React.Dispatch<React.SetStateAction<AppData>>
}) => {
  if (!isFormValid) {
    return;
  } else {
    setAppData(prevState => {
      return {
        ...prevState,
        currentStep: prevState.currentStep + 1,
        validations: {
          isFormValid: false
        }
      }
    })
  }
}

function App() {
  const { appData, setAppData } = useData();
  const { currentStep, steps, validations: { isFormValid } } = appData;

  return (
    <main className='p-sm'>
      <div className='container d-flex jc-center f-direction-col ai-center p-md'>
        <header>
          <div className='d-flex ai-center jc-center gap-10'>
            <img src={`${IMAGES_URL.LOGO}`} alt="logo" />
            <h1>Eden</h1>
          </div>
        </header>
        <section className='w-100'>
          <div className='wrapper-stepbar'>
            <Stepbar />
          </div>


        </section>

        <Step />


        <div className='p-md w-80 py-lg'>
          {currentStep !== steps.length ? <button

            className='btn btn-primary p-lg w-100'
            onClick={() => {
              onClickHandler({
                isFormValid,
                setAppData
              })
            }}
          >Create Workspace</button> : <button className='btn btn-primary p-lg w-100'>Launch Eden</button>}
        </div>
      </div>


    </main>
  );
}

export default App;
