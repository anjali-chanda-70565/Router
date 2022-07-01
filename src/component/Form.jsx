import React, { useState } from "react";

function Form() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [emailName, setemailName] = useState();
  const [passwordName, setpasswordName] = useState();
  const [confirmpassowrdName, setconfirmpasswordName] = useState();
  const [showData, setShowData] = useState([]);

  //   const changeHandler = (e) => {
  //     setfirstName(e);
  //   };
  const submitData = () => {
    let Data = [];
    Data = showData.push(
      firstName,
      lastName,
      emailName,
      passwordName,
      confirmpassowrdName
    );
    console.log("showData", showData);
  };

  return (
    <>
      <section className="d-flex min-vh-100 align-items-center justify-content-center">
        <div className="container d-flex justify-content-center align-items center ">
          <div className="row">
            <div className="col">
              <div className="form_border">
                <div class="mb-3">
                  <input
                    onChange={(e) => setfirstName(e.target.value)}
                    // onChange={(e) => changeHandler(e)}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setlastName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setemailName(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setpasswordName(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setconfirmpasswordName(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="text-center mt-4">
                  <button
                    className="fs-4 fw-bold submit_btn py-1 px-3"
                    onClick={() => submitData()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;