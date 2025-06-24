import * as SC from "./ProjectStyled";

import { useFormik } from "formik";

const Project = ({ toggleProject, toggleGrace }) => {
  const formik = useFormik({
    initialValues: {
      choose: "",
    },
  });

  return (
    <SC.FormStyled>
      <SC.ProjectCon>
        <div>
          <SC.TitleCon>
            <SC.FormTitle>Back this project</SC.FormTitle>
            <SC.CloseBtn type="button" onClick={toggleProject}></SC.CloseBtn>
          </SC.TitleCon>
          <SC.FormContent>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?{" "}
          </SC.FormContent>
        </div>
        <SC.ProjectList>
          <li>
            <SC.InputCon>
              <label htmlFor="noReward">
                <input
                  type="radio"
                  name="choose"
                  value="noReward"
                  onChange={formik.handleChange}
                  checked={formik.values.choose === "noReward"}
                />
              </label>
              <SC.ItemTitle style={{ margin: 0 }}>
                Pledge with no reward
              </SC.ItemTitle>
            </SC.InputCon>
            <SC.ItemContent>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </SC.ItemContent>
            {formik.values.choose === "noReward" ? (
              <>
                <SC.Line></SC.Line>
                <SC.AccordCon>
                  <p>Enter Your pledge</p>
                  <div>
                    <label htmlFor="pledge">
                      <SC.Bucks>$</SC.Bucks>
                      <input type="text" name="pledge" placeholder="0" />
                    </label>
                    <button type="button" onClick={toggleGrace}>Continue</button>
                  </div>
                </SC.AccordCon>
              </>
            ) : null}
          </li>
          <li>
            <SC.InputCon>
              <label htmlFor="bamboo">
                <input
                  type="radio"
                  name="choose"
                  value="bamboo"
                  onChange={formik.handleChange}
                  checked={formik.values.choose === "bamboo"}
                />
              </label>
              <div>
                <SC.ItemTitle>Bamboo Stand</SC.ItemTitle>
                <SC.ItemPrice>Pledge $25 or more</SC.ItemPrice>
              </div>
            </SC.InputCon>
            <SC.ItemContent>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </SC.ItemContent>
            <SC.Leftover>
              <p>101</p>
              <p>left</p>
            </SC.Leftover>
            {formik.values.choose === "bamboo" ? (
              <>
                <SC.Line></SC.Line>
                <SC.AccordCon>
                  <p>Enter Your pledge</p>
                  <div>
                    <label htmlFor="pledge">
                      <SC.Bucks>$</SC.Bucks>
                      <input type="text" name="pledge" placeholder="25" />
                    </label>
                    <button type="button" onClick={toggleGrace}>Continue</button>
                  </div>
                </SC.AccordCon>
              </>
            ) : null}
          </li>
          <li>
            <SC.InputCon>
              <label htmlFor="blackEdition">
                <input
                  type="radio"
                  name="choose"
                  value="blackEdition"
                  onChange={formik.handleChange}
                  checked={formik.values.choose === "blackEdition"}
                />
              </label>
              <div>
                <SC.ItemTitle>Black Edition Stand</SC.ItemTitle>
                <SC.ItemPrice>Pledge $75 or more</SC.ItemPrice>
              </div>
            </SC.InputCon>
            <SC.ItemContent>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </SC.ItemContent>
            <SC.Leftover>
              <p>64</p>
              <p>left</p>
            </SC.Leftover>
            {formik.values.choose === "blackEdition" ? (
              <>
                <SC.Line></SC.Line>
                <SC.AccordCon>
                  <p>Enter Your pledge</p>
                  <div>
                    <label htmlFor="pledge">
                      <SC.Bucks>$</SC.Bucks>
                      <input type="text" name="pledge" placeholder="75" />
                    </label>
                    <button type="button" onClick={toggleGrace}>Continue</button>
                  </div>
                </SC.AccordCon>
              </>
            ) : null}
          </li>
          <li style={{ opacity: 0.5 }}>
            <SC.InputCon>
              <label htmlFor="mahogany">
                <input
                  type="radio"
                  name="choose"
                  value="mahogany"
                  onChange={formik.handleChange}
                  checked={formik.values.choose === "mahogany"}
                />
              </label>
              <div>
                <SC.ItemTitle>Mahogany Special Edition</SC.ItemTitle>
                <SC.ItemPrice>Pledge $200 or more</SC.ItemPrice>
              </div>
            </SC.InputCon>
            <SC.ItemContent>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </SC.ItemContent>
            <SC.Leftover>
              <p>0</p>
              <p>left</p>
            </SC.Leftover>
            {formik.values.choose === "mahogany" ? (
              <>
                <SC.Line></SC.Line>
                <SC.AccordCon>
                  <p>Enter Your pledge</p>
                  <div>
                    <label htmlFor="pledge">
                      <SC.Bucks>$</SC.Bucks>
                      <input type="text" name="pledge" placeholder="200" />
                    </label>
                    <button type="button" onClick={toggleGrace}>Continue</button>
                  </div>
                </SC.AccordCon>
              </>
            ) : null}
          </li>
        </SC.ProjectList>
      </SC.ProjectCon>
    </SC.FormStyled>
  );
};

export default Project;
