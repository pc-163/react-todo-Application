import React, { useState } from 'react';
import './todo.css';
import { v4 as uuid } from 'uuid';
import CompleteList from "./completeList";
import Todolist from "./todolist";
import Form from "./form";
import { FcOk, FcTodoList } from "react-icons/fc";

const Todo = () => {
      const [value, setValue] = useState('');
      const [tagName, setTagName] = useState('');
      const [todo, settodo] = useState([]);
      const [completeList, setcompletedList] = useState([]);
      const [searchItem, setSearchItem] = useState('');

      const [valid, setValid] = useState(false);
      const [taskValid, settaskValid] = useState(true);
      const [taskComplete, settaskComplete] = useState(true);



      const unique_id = uuid();
      const small_id = unique_id.slice(0, 8); //generate small id

      //Submit text validation lengths
      const isValid = value.length || tagName.length < 0;

      //Submit Task
      const submitTask = (e) => {
            e.preventDefault();

            isValid
                  ? settodo([...todo, { id: small_id, Task: value, Tags: tagName }])
                  : console.log('');

            setValue('');
            setTagName('');
            setValid(true);
            settaskValid(false);
      }

      const handleChange = (e) => {
            setValue(e.target.value);
      }
      const getText = (e) => {
            let text = e.target.value;
            const myArray = text.split(","); //after , use space submit tag not split
            setTagName(myArray);
      }
      const doneList = (id) => {
            const oldTodo = [...todo];
            const filter = oldTodo.filter((item) => item.id == id);
            setcompletedList(prev => [...prev, ...filter]);
            const filterFortodo = oldTodo.filter(item => item.id != id);
            settodo(filterFortodo);
            if (filterFortodo != 0) {
            } else {
                  settaskValid(true);
            }
            settaskComplete(false);
      }
      const searchtext = (e) => {
            setSearchItem(e.target.value);
      }
      const filterList = (tag) => {
            const oldTodo = [...todo];
            const filter = oldTodo.filter(cuurentData => cuurentData.Tags.includes(tag));
            settodo(filter);
      }
      const searchTasks =
            todo.filter((val) => {
                  if (searchItem == '') {
                        return val;

                  } else if (val.Task.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val;
                  }
            });

      return (
            <div>
                  <section className="vh-100">
                        <div className="container py-5 h-100">
                              <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col col-lg-11 col-xl-9 col-xxl-12">
                                          <div className="card rounded-3">
                                                <div className="card-body p-4">

                                                      <Form handleChange={handleChange} submitTask={submitTask} getText={getText} value={value} tagName={tagName} />

                                                      {valid ?
                                                            <div className="col-12 mb-4">
                                                                  <div className="form-outline">
                                                                        <input type="search" id="form1" className="form1" placeholder='Search task' onChange={searchtext} />
                                                                  </div>

                                                            </div>
                                                            : ''
                                                      }
                                                      <div className="col-md-12 mt-5 border-end">
                                                            <div className="row">
                                                                  <div className="col-md-12 col-lg-6">
                                                                        <h3 className='main-titles pb-3'>Added all Tasks Here</h3>
                                                                        {taskValid ? <p className='view-message'><FcTodoList /></p> : ''}

                                                                        <Todolist searchTasks={searchTasks} doneList={doneList} filterList={filterList} todo={todo} />
                                                                  </div>
                                                                  <hr className="bottom-border" />
                                                                  <div className="col-md-12 col-lg-6">
                                                                        <h3 className='main-titles pb-3'>Completed Tasks</h3>
                                                                        {taskComplete ? <p className='view-message'><FcOk /></p> : ''}
                                                                        <CompleteList completeList={completeList} />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      )
}

export default Todo