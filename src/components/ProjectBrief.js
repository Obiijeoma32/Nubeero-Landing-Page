import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import product from "./product.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";


function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
}
function ProjectBrief() {

   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const id = searchParams.get("id");

   const [developmentPhase, setDevelopmentPhase] = useState([]);
   const myString = developmentPhase.join(", ");
 
   const [brandingGuides, setBrandingGuides] = useState("");
   const [relevantBrandBook, setRelevantBrandBook] = useState("");
   const [importance, setImportance] = useState("");


   const handleDevelopmentPhase = (event) => {
      const { value, checked } = event.target;
    if (checked) {
      setDevelopmentPhase([...developmentPhase, value]);
  
    } else {
         setDevelopmentPhase(developmentPhase.filter((v) => v !== value));

    }
  
   };
   const handleBrandingGuides = (event) => {
     setBrandingGuides(event.target.value);
   };
   const handleRelevantBook = async (event) => {
         const file = event.target.files[0];
    const base64String = await fileToBase64(file);
    setRelevantBrandBook(base64String);
   
   };
   const handleImportance = (event) => {
     setImportance(event.target.value);
   };

  //  const handleSaveClick = async () => {
  //    const requestOptions = {
  //      method: "PUT",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify({
  //        developmentPhase: myString,
  //        brandingGuides: brandingGuides,
  //        relevantBrandBook: relevantBrandBook ,
  //        importance: importance,
  //      }),
  //    };

  //    console.log(requestOptions);

  //    fetch(
  //      `https://nubeerobackend.onrender.com/basicInfo/${id}/projectBrief`,
  //      requestOptions
  //    )
  //      .then((response) => response.json())
  //      .then((data) => {
  //        console.log(data);
        

  //        window.location.href = "/branding?id=" + id;
  //      })
  //      .catch((err) => {
  //        console.log(err.message);
  //      });
  //  };



   const handleSaveClick = async () => {

     window.location.href = "/branding?id=" + id;
    //  const requestOptions = {
    //    method: "PUT",
    //    headers: { "Content-Type": "application/json" },
    //    body: JSON.stringify({
    //      developmentPhase: myString,
    //      brandingGuides: brandingGuides,
    //      relevantBrandBook: relevantBrandBook ,
    //      importance: importance,
    //    }),
    //  };

    //  console.log(requestOptions);

    //  fetch(
    //    `https://nubeerobackend.onrender.com/basicInfo/${id}/projectBrief`,
    //    requestOptions
    //  )
    //    .then((response) => response.json())
    //    .then((data) => {
    //      console.log(data);
    //      console.log(data.responsecode);

    //      window.location.href = "/branding?id=" + id;
    //    })
    //    .catch((err) => {
    //      console.log(err.message);
    //    });
   };


   
  return (
    <>
      <div className="project-container flex">
        <div className="project-sidebar">
          <SideBar />
        </div>
        <div className="project-brief">
          <h1>Project Brief</h1>
          <p className="p">
            Please fill in the details below so we can get in touch with you
          </p>
          <h2>
            Which phase of the product development process have you fulfilled?
          </h2>
          <img src={product} alt="product" />
          <form
            autoComplete="on"
            className="project-form"
            action="mailto:info@nubeero.com"
          >
            <span className="flex checkbox">
              <span>
                <input
                  className="input"
                  value="Product Ideation/Definition "
                  type="checkbox"
                  onChange={handleDevelopmentPhase}
                />
              </span>
              <p>
                Product Ideation/Definition 💡 (I am/We are still fleshing
                things out; ie. research is on going or just completed)
              </p>
            </span>

            <span className="flex checkbox">
              <span>
                <input
                  value="Business model validation "
                  className="input"
                  type="checkbox"
                  onChange={handleDevelopmentPhase}
                />
              </span>
              <p>
                Business model validation 💼 (I/We have tested my idea with an
                MVP){" "}
              </p>
            </span>

            <span className="flex checkbox">
              <span>
                <input
                  value="Product Conceptualisation "
                  className="input"
                  type="checkbox"
                  onChange={handleDevelopmentPhase}
                />
              </span>
              <p>
                Product Conceptualisation 📱 (I am/We are ready to release a
                working version of my product to the market)
              </p>
            </span>
            <span className="flex checkbox">
              <span>
                <input
                  value="Product Branding & Identity "
                  className="input"
                  type="checkbox"
                  onChange={handleDevelopmentPhase}
                />
              </span>
              <p>
                Product Branding & Identity 🎨 (I/We have a working solution
                that I/we want to market, but it needs a name, logo, identity
                etc)
              </p>
            </span>
            <span className="flex checkbox">
              <span>
                <input
                  value="Product Launch "
                  className="input"
                  type="checkbox"
                  onChange={handleDevelopmentPhase}
                />
              </span>
              <p>
                Product Launch 🚀 (I am/We are confident in our solution and
                it's time to release it to the world)
              </p>
            </span>
           
            <h3>Are there any branding guidelines to respect? </h3>
            <p className="project-radio">
              This is usually a brand book covering things like colors and fonts
            </p>
            <div className="radio-button">
              <input

                id="yes"
                name="options"
                value="Yes"
                type="radio"
                onChange={handleBrandingGuides}
              />
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                id="no"
                name="options"
                value="No"
                type="radio"
                onChange={handleBrandingGuides}
              />
              <label htmlFor="no">No</label>
              <br />
            </div>
            <br />

            <label
              style={{ fontweight: "500", fontSize: "20px", color: "#00325c" }}
              htmlFor="project"
            >
              Please share any available relevant brand book/elements
            </label>
            <br />
            <p
              style={{
                fontWeight: "400",
                fontSize: "14px",
                color: "#0098db",
                paddingTop: "4px",
                marginBottom: "3px",
              }}
            >
              You can share attach up to 5 files, preferably in PDF
            </p>

            <div className="flex file-field">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.04688 5.76485L9 2.8125L11.9531 5.76485"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 10.6874V2.81445"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1875 10.6875V14.625C15.1875 14.7742 15.1282 14.9173 15.0227 15.0227C14.9173 15.1282 14.7742 15.1875 14.625 15.1875H3.375C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V10.6875"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
              onChange={handleRelevantBook}
                type="file"
                name="file[]"
                id="attachment"
                accept=".doc,.xml,.xls,.pdf,.ppt"
                multiple
              />
            </div>
            <h2>
              How important is it for you to build a relationship with your
              product and its existing or potential customers/users?{" "}
            </h2>
            <p
              style={{
                fontWeight: "400",
                fontSize: "14px",
                color: "#0098db",
                paddingTop: "6px",
                marginBottom: "3px",
              }}
            >
              This helps us to understand how user-centered your product aims to
              be.
            </p>
            <div className="flex radio-number-container">
              <h4>Not Important</h4>
              <div className="radio-number">
                <span className="flex">
                  <label htmlFor="number">1</label>
                  <input
                    id="1"
                    name="options4"
                    value="1"
                    type="radio"
                    onChange={handleImportance}
                  />
                </span>
                <span>
                  <label htmlFor="number">2</label>
                  <input
                    id="2"
                    name="options4"
                    value="2"
                    type="radio"
                    onChange={handleImportance}
                  />
                </span>
                <span>
                  <label htmlFor="number">3</label>
                  <input
                    id="3"
                    name="options4"
                    value="3"
                    type="radio"
                    onChange={handleImportance}
                  />
                </span>
                <span>
                  <label htmlFor="number">4</label>
                  <input
                    id="4"
                    name="options4"
                    value="4"
                    type="radio"
                    onChange={handleImportance}
                  />
                </span>
                <span>
                  <label htmlFor="number">5</label>
                  <input
                    id="5"
                    name="options4"
                    value="5"
                    type="radio"
                    onChange={handleImportance}
                  />
                </span>
              </div>
              <h4>Very Important</h4>
            </div>
          </form>
          <div className="basic-button mt-12 mb-10">
            <div className="option-link">
              <Link to="/onboarding">BACK</Link>
            </div>
            <div className="option-link" style={{ paddingTop: "14px" }} onClick={handleSaveClick}>
              NEXT STEP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBrief;
