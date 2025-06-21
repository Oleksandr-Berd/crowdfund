import * as SC from "./AboutStyled"
const About = () => {
  return (
    <SC.AboutConStyled id="about">
      <div>
        <h3>About this porject</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <ul>
        <li>
          <h4>Bamboo Stand</h4>
          <h5>Pledge $25 or more</h5>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div>
            <div>
              <h6>101</h6>
              <p>left</p>
            </div>
            <button>Select reward</button>
          </div>
        </li>
        <li>
          <h4>Black Edition Stand</h4>
          <h5>Pledge $75 or more</h5>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div>
            <div>
              <h6>64</h6>
              <p>left</p>
            </div>
            <button>Select reward</button>
          </div>
        </li>
        <li>
          <h4>Mahogany Special Edition</h4>
          <h5>Pledge $200 or more</h5>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div>
            <div>
              <h6>0</h6>
              <p>left</p>
            </div>
            <button>Select reward</button>
          </div>
        </li>
      </ul>
    </SC.AboutConStyled>
  );
};

export default About;
