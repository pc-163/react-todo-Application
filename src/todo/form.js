import React from 'react'

const Form = ({ submitTask, handleChange, getText, value, tagName }) => {
      return (
            <>

                  <h4 className="text-center my-3 pb-3">To Do Application</h4>
                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2 row-wrap-m" onSubmit={submitTask}>
                        <div className="col-12 col-pc-5">
                              <div className="form-outline">
                                    <input type="text" id="form1" className="form1" placeholder='Enter a task here' onChange={handleChange} value={value} required />
                              </div>
                        </div>
                        <div className="col-12 col-pc-5">
                              <div className="form-outline">
                                    <input type="text" id="form1" className="form1" placeholder='Enter a tag name' onChange={getText} value={tagName} required />
                              </div>
                        </div>

                        <div className="col-12 col-pc-2">
                              <input type="submit" className="btn btn-primary" value={'Save'} />
                        </div>

                  </form>
            </>
      )
}

export default Form