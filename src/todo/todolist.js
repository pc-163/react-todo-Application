//import React, { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
const Todolist = ({ searchTasks, doneList, filterList, todo }) => {

      return (
            <>

                  <table className="table">
                        <tbody>
                              {searchTasks.map(items => (
                                    <tr key={items.id} className='my-table-row'>
                                          <td>{items.Task}</td>
                                          <td className='single-tags'>
                                                {Array.from(items.Tags, (e, element) => {
                                                      return <p key={e} onClick={(e) => filterList(`${e.target.innerText}`)} className='tag-filter'>{items.Tags[element]}</p>
                                                })
                                                }
                                          </td>
                                          <td className='button-list'>
                                                <button type="submit" className="btn btn-success" onClick={() => doneList(items.id)}>Done</button>
                                          </td>
                                    </tr>
                              ))}

                        </tbody>
                  </table>
                  {searchTasks.length === 0 && todo.length !== 0 ? <p className='view-message'><FiAlertTriangle /></p> : ''}
            </>
      )
}

export default Todolist