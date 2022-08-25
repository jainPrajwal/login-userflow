import React from 'react';
import './App.css';
import { Stepbar } from './components/Stepbar';

import { Step } from './components/Step';

import { useData } from './hooks/useData';




function App() {
  const { appData, setAppData } = useData();
  const { currentStep, steps, validations: { isFormValid } } = appData

  return (
    <main className='p-sm'>
      <div className='container d-flex jc-center f-direction-col ai-center p-md'>
        <header>
          <div className='d-flex ai-center jc-center gap-10'>
            <img src="https://res.cloudinary.com/dmk11fqw8/image/upload/v1661347157/Icon_onjsgk.jpg" alt="flow" />
            <h1>Eden</h1>
          </div>
        </header>
        <section>
          <div className='wrapper-stepbar'>
            <Stepbar />
          </div>
          

        </section>
      
        <Step />

       
        <div className='p-md w-80 py-lg'>
          {currentStep !== steps.length ? <button

            className='btn btn-primary p-lg w-100'
            onClick={() => {
              if (!isFormValid) {
                return;
              } else {
                setAppData(prevState => {
                  return {
                    ...prevState,
                    currentStep: currentStep + 1
                  }
                })
              }
            }}
          >Create Workspace</button> : <button className='btn btn-primary p-lg w-100'>Launch Eden</button>}
        </div>
      </div>


    </main>
  );
}

export default App;
