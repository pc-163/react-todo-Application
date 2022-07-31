import React from 'react'

const CompleteList = ({ completeList }) => {
      return (
            <>

                  <table className="table">
                        <tbody>


                              {completeList.map((item, index) => (
                                    <tr key={index} className='my-table-row complete-row'>
                                          <td>{item.Task}</td>
                                          <td className='single-tags' id='link-disabled'>
                                                {Array.from(item.Tags, (e, element) => {
                                                      return <p key={e} className='tag-filter'>{item.Tags[element]}</p>
                                                })
                                                }
                                          </td>
                                          <td className='button-list completed-list'>
                                                <button type="submit" className="btn btn-warning">Completed</button>
                                          </td>
                                    </tr>
                              ))}

                        </tbody>
                  </table>


            </>
      )
}

export default CompleteList