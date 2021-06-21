import React from "react";
import axios from "axios";
function Form({ closeModal }) {
  const [state, setState] = React.useState({
    projectNameByIT: "",
    projectManager: "",
    email: "",
    practice: "",
    status: "Pending",
    totalProjectCount: "",
  });
  function handlePlainText(evt) {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  }
  function handlePractice(evt) {
    setState({
      ...state,
      practice: evt.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const postState = {
      projectNameByIT: state.projectNameByIT,
      projectManager: state.projectManager,
      email: state.email,
      practice: state.practice,
      status: state.status,
    };

    axios
      .post("http://localhost:5000/clientInfo/email", postState)
      .then((res) => {
        if (res.data === "success") {
          alert("Data Saved and Email Sent Successfully!");
        }
        else {
          alert("Message Failed to Send, contact Practice team");
        }
        closeModal()
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="row">
        <div className="form-group col-md-6">
          <label htmlFor="projectNameByIT">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="projectNameByIT"
            name="projectNameByIT"
            value={state.projectNameByIT}
            onChange={handlePlainText}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="projectManager">Project Manager</label>
          <input
            type="text"
            className="form-control"
            id="projectManager"
            name="projectManager"
            value={state.projectManager}
            onChange={handlePlainText}
          />
        </div>

      </div>
      
      <div className="form-group col-md-12">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={state.email}
          onChange={handlePlainText}
          placeholder="name@evoketechnologies.com"
        />
      </div>

      <div className="form-group col-md-6">
        <label>Practice Name </label>
        <select
          className="form-control"
          id="practice"
          value={state.Practice}
          onChange={handlePractice}
          defaultValue="Select Practice Team"
        >
          <option disabled>Select Practice Team</option>
          <option value="QA Practice">QA Practice</option>
          <option value="Oracle Practice">Oracle Practice</option>
          <option value="Java Practice">Java Practice</option>
          <option value="Microsoft Practice">Microsoft Practice</option>
          <option value="Other">Other Practice</option>
        </select>
      </div>

      <div className="form-group row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
        <button className="form-control btn btn-primary" type="submit">
          Reset
        </button>
        <button className="form-control btn btn-primary share-btn" type="submit">
          Share
        </button>
        </div>
      </div>
    </form>
  );
}
export default Form;