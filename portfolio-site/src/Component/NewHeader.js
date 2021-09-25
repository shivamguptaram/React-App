import React from 'react'
import img from './shiv.jpg'
const NewHeader = () => {
    return (
        <>
        
  
      <main className="container">
        <div className="content">
          <div className="text">
            {/* <h1>
              Hey, I'm a <br />
              Freelance <span>UI/UX</span> <br />
              designer
            </h1> */}
            <h1>
              Hey, I'm a <br />
               <span>Full-Stack Developer</span> <br />

            </h1>
            <p>
              Hi, I'm Shivam, Full-Stack Developer from India. <br />
              I help brands turn their dreams into high quality products.
            </p>
            {/* <div className="field">
                <label>
                    <input type="text" placeholder="Email Address"/>
                    <button>Subscribe</button>
                </label>
            </div> */}
            {/* <p>&#127881;Join my newsletter to get free strategies.</p> */}
          </div>
          <div className="person">
              <div className="__BG">
                  <img src={img} alt="person " />
              </div>
          </div>
        </div>
      </main>
      </>
    )
}

export default NewHeader
