export const Workspace = () => {
    return   <section className='d-flex f-direction-col ai-center w-100'>
    
    
    <h1 className='header-primary'>Let&#x27;s set up a home for all of your work</h1>
    <p className='text-secondary text-center py-md'>You can always create another workspace later.</p>

    <div className='w-80'>
      <form action="">
        <div className='d-flex f-direction-col p-md'>
          <label htmlFor="workspace-name" className='my-sm text-bold'>
            Workspace Name
          </label>
          <input type="text"
            id='workspace-name'
            className='input p-lg'
            placeholder='Eden'
          />
        </div>

        <div className='d-flex f-direction-col p-md pos-rel'>
          <label htmlFor="workspace-name" className='my-sm '>
            <span className='text-bold'>Workspace URL</span>
            <span className='text-secondary ml-sm'>(optional)</span>
          </label>
          <div className='d-flex  '>
            <div className='input-url d-flex ai-center p-lg bg-disabled'>
              <div>www.example.com/</div>
            </div>
            <input type="text"
              id='workspace-name'
              className='input p-lg w-100'
              placeholder='Example'

            />
          </div>
        </div>
      </form>
    </div>
  </section>

}