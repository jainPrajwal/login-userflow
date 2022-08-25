export const Setup = () => {
    return  <section className='d-flex f-direction-col ai-center w-100'>
  
    <h1 className='header-primary'>How are you planning to use Eden?</h1>
    <p className='text-secondary text-center py-md'>We'll streamline your setup experience accordingly.</p>

    <div className='d-flex f-direction-col ai-center w-80'>
      <div className='py-lg d-flex gap-20 jc-center'>
        <article>
          <div className="card d-flex f-direction-col p-lg cursor-pointer border-primary">
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
          <div className="card d-flex f-direction-col p-lg cursor-pointer">
            <div className='py-sm'>
              <img src="https://res.cloudinary.com/dmk11fqw8/image/upload/v1661355693/User_dieqap.jpg" alt="With my team" />
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