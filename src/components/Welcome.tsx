import { useData } from "../hooks/useData";

export const Welcome = () => {
    const { appData: { validations: { isFormValid } } } = useData();

    return <><section className='d-flex f-direction-col ai-center w-100'>


        <h1 className='header-primary'>Welcome! First things first...</h1>
        <p className='text-secondary text-center py-md'>You can always change them later.</p>

        <div className='w-80'>
            <form action="">
                <div className='d-flex f-direction-col p-md'>
                    <label htmlFor="workspace-name" className='my-sm text-bold'>
                        Full Name
                    </label>
                    <input type="text"
                        onBlur={() => {
                            console.log(`called`);
                        }}
                        id='workspace-name'
                        className='input p-lg'
                        placeholder='Eden'
                    />
                </div>

                <div className='d-flex f-direction-col p-md pos-rel'>
                    <label htmlFor="workspace-name" className='my-sm '>
                        <p className='text-bold'>Display Name</p>

                    </label>


                    <input type="text"

                        onChange={(e) => {

                            if (e.target.value.match(/^[A-Za-z_]+$/)) {
                              
                            } else {
                               
                            }
                        }}
                        id='workspace-name'
                        className='input p-lg w-100'
                        placeholder='Example'

                    />

                </div>
            </form>
        </div>
    </section></>
}