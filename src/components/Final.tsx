import { IMAGES_URL } from "../constants/data.types"

export const Final = () => {
    return <section className='d-flex f-direction-col ai-center w-100'>
        <div className='py-lg'>
            <img src={`${IMAGES_URL.SIGNUP_SUCCESSFULL}`} alt="sign up successfull" width={`80px`} height={`80px`} />

        </div>
        <div className='d-flex f-direction-col ai-center w-80'>
            <div className='header-primary'>Congratulations, Eren!</div>
            <p className='text-secondary text-center py-md'>You have completed onboarding, you can start using the Eden!</p>
        </div>
    </section>
}