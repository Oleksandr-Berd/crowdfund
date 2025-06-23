import * as SC from "./ProjectStyled"

import { useFormik } from "formik";

const Project = () => {
  const formik = useFormik({
    initialValues: {
      noReward: false,
      bamboo: false,
      blackEdition: false,
      mahogany: false,
    },
  });

  const { noReward, bamboo, blackEdition, mahogany } = formik.values;

  console.log(noReward, bamboo, blackEdition, mahogany);

  return (
    <SC.FormStyled>
      <SC.ProjectCon>
        <div>
          <div>
            <h3>Back this project</h3>
            <button></button>
          </div>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?{" "}
          </p>
        </div>
        <ul>
          <li>
            <label htmlFor="noReward">
              <input type="radio" name="noReward" />
              Pledge with no reward
            </label>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </li>
          <li>
            <div>
              <label htmlFor="bamboo">
                <input type="radio" name="bamboo" />
              </label>
              <div>
                <p>Bamboo Stand</p>
                <p>Pledge $25 or more</p>
              </div>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div>
              <p>101</p>
              <p>left</p>
            </div>
          </li>
          <li>
            <div>
              <label htmlFor="blackEdition">
                <input type="radio" name="blackEdition" />
              </label>
              <div>
                <p>Black Edition Stand</p>
                <p>Pledge $75 or more</p>
              </div>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div>
              <p>64</p>
              <p>left</p>
            </div>
          </li>
          <li>
            <div>
              <label htmlFor="mahogany">
                <input type="radio" name="mahogany" />
              </label>
              <div>
                <p>Mahogany Special Edition</p>
                <p>Pledge $200 or more</p>
              </div>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div>
              <p>0</p>
              <p>left</p>
            </div>
          </li>
        </ul>
      </SC.ProjectCon>
    </SC.FormStyled>
  );
};

export default Project;
