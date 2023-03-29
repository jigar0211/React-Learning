import React from 'react'
import { useState } from 'react'
export const Form = () => {
    const [data, setData] = useState({
        username: '',
        password: ''
      });
      const [form, setForm] = useState({
        username: '',
        password: ''
      });
      const [submit, submitted] = useState(false);
     
      const printValues = e => {
        e.preventDefault();
        setForm({
          username: data.username,
          password: data.password
        });
        submitted(true);
      };
     
      const updateField = e => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
    }
  return (
    <div>
       <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={data.username}
          name="username"
          onChange={updateField}
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input
          value={data.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <br />
      <button>Submit</button>
    </form>
        <p>{submit?form.username:null}</p>
        <p>{submit?form.password:null}</p>
    </div>
  )
}
export default Form