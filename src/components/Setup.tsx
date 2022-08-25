import { useState } from "react";
import { useData } from "../hooks/useData";
import { useFormCheck } from "../hooks/useFormCheck";

export const Setup = () => {
  const { appData: { userData, validations: { isFormValid } }, setAppData } = useData();
  useFormCheck();


  return <section className='d-flex f-direction-col ai-center w-100'>

    <h1 className='header-primary'>How are you planning to use Eden?</h1>
    <p className='text-secondary text-center py-md'>We'll streamline your setup experience accordingly.</p>

    <div className='d-flex f-direction-col ai-center w-80'>
      <div className='py-lg d-flex gap-20 jc-center f-wrap'>
        <article>
          <div
            role={`button`}
            onClick={() => {
              setAppData(prevState => {
                return {
                  ...prevState,
                  userData: {
                    ...prevState.userData,
                    setup: `myself`
                  },
                  validations: {
                    ...prevState.validations,
                    isFormValid: true
                  }
                }
              })
            }}
            className={`card d-flex f-direction-col p-lg cursor-pointer ${userData.setup === `myself` ? `border-primary` : ``}`}>
            <div className='py-sm'>
              <img src="https://res.cloudinary.com/dmk11fqw8/image/upload/v1661355693/User_dieqap.jpg" alt="For myself" />
            </div>
            <div >
              <div className='text-bold py-md'>For myself</div>
              <p>
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </div>
        </article>

        <article>
          <div
            role={`button`}
            onClick={() => {
              setAppData(prevState => {
                return {
                  ...prevState,
                  userData: {
                    ...prevState.userData,
                    setup: `team`
                  },
                  validations: {
                    ...prevState.validations,
                    isFormValid: true
                  }
                }
              })
            }}
            className={`card d-flex f-direction-col p-lg cursor-pointer ${userData.setup === `team` ? `border-primary` : ``}`}>
            <div className='py-sm'>
              <img src="https://res.cloudinary.com/dmk11fqw8/image/upload/v1661355693/Users_qzn6xb.png" alt="With my team" />
            </div>
            <div >
              <div className='text-bold py-md'>With my team</div>
              <p>
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </div>
          </div>
        </article>


      </div>
     
    </div>

  </section>
}