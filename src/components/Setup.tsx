
import { AppData, IMAGES_URL } from "../constants/data.types";
import { useData } from "../hooks/useData";
import { useFormCheck } from "../hooks/useFormCheck";

const onClickHandler = ({ setAppData, setup = `myself` }: { setAppData: React.Dispatch<React.SetStateAction<AppData>>, setup: `myself` | `team` }) => {
  setAppData(prevState => {
    return {
      ...prevState,
      userData: {
        ...prevState.userData,
        setup
      },
      validations: {
        ...prevState.validations,
        isFormValid: true
      }
    }
  })
}

export const Setup = () => {
  const { appData: { userData }, setAppData } = useData();
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
              onClickHandler({
                setAppData,
                setup: `myself`
              })
            }}
            className={`card d-flex f-direction-col p-lg cursor-pointer ${userData.setup === `myself` ? `border-primary` : ``}`}>
            <div className='py-sm'>
              <img src={`${IMAGES_URL.MYSELF}`} alt="For myself" />
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
              onClickHandler({
                setAppData,
                setup: `team`
              })
            }}
            className={`card d-flex f-direction-col p-lg cursor-pointer ${userData.setup === `team` ? `border-primary` : ``}`}>
            <div className='py-sm'>
              <img src={`${IMAGES_URL.TEAM}`} alt="With my team" />
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