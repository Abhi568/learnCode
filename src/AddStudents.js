import React, { useState } from "react";

export default function AddStudents() {
    let [form, setForm]  = useState({stuName:"", grade:"", payment:"", date:""})

    const enterngDetails=(eve)=>{
        console.log(eve.target.id)
        let updatedObj = { ...form, [eve.target.id]: eve.target.value };
        setForm(updatedObj);
    
    }
    const submit = (eve)=>{
        eve.preventDefault()
        console.log(form)
    }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        +
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
                <span>JSON.stringify(form)</span>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="stuName"
                    aria-describedby="emailHelp"
                    value={form.stuName}
                    onChange={enterngDetails}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="grade" className="form-label">
                    Grade
                  </label>
                  <input type="text" className="form-control" id="grade"  value={form.grade} onChange={enterngDetails}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="admission" className="form-label">
                    Date of Admission
                  </label>
                  <input type="date" className="form-control" id="admission" value={form.date} onChange={enterngDetails}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="payment" className="form-label">
                    Payment
                  </label>
                  <input type="text" className="form-control" id="payment" input={form.payment} onChange={enterngDetails}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={submit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
