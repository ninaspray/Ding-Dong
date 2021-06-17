/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./App";
import YoutubeEmbed from "./YoutubeEmbed";
import "../styles/About.css";

//screenshots
import loginScreenshot from "../Images/Screenshots/Screenshot__login.png";
import signUpScreenshot from "../Images/Screenshots/Screenshot__signUp.png";
import tenantListScreenshot from "../Images/Screenshots/Screenshot__DingDong.png";
import addTenantScreenshot from "../Images/Screenshots/Screenshot__new-tenant.png";
import phoneScreenshot from "../Images/Screenshots/Screenshot__phone-notification.png";
import dingDongSent from "../Images/Screenshots/Screenshot__DingDong-sent.png";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h1>DingDong</h1>
        <p>
          A dynamic alternative to logging collected parcels manually.
          Ding Dong was designed and created with the apartment concierge in mind.
        </p>
        <p className="about__final-paragraph">
          Forget about manually scribbling on countless slips of paper to notify residents their package/s have arrived, simply click the “Send DingDong” button and a text will automatically arrive on the tennant’s phone to let them know a package is waiting for them to collect at reception.
        </p>

        <h1>How Does it Work?</h1>
        <p>
          The tennant will need to present the text notification as a form of identification, verifying the right person has picked up the right package.
          Once the tennant has collected the parcel, navigate the cursor to the Ding Dong tab, you can find this situated at the top of the page. Hover over the words Ding Dong and click. 
        </p>
        <p className="about__final-paragraph">
          Next, you can select the tennant either by name or flat number.
          When the tennant has collected the package clearly mark the parcel has been collected by clicking “collected” next to the correct tenants details.  
        </p>

        <h1>Video: How to use Ding Dong</h1>
        <YoutubeEmbed className="video__responsive" embedId="h-7nslwuNz8"/>
        <p className="about__final-paragraph">
        </p>
        <h1>Step-by-Step Guide</h1>
        <img 
          className="about__image" 
          src={signUpScreenshot}
          alt="screenshot">
        </img>
        <p>
          1) - SignUp - Sign up using your work email address and enter a password of your choice 
        </p>
        <img 
          className="about__image" 
          src={loginScreenshot}
          alt="screenshot">
        </img>
        <p>
          2) - Login - Login using your email and password
        </p>
        <img 
          className="about__image" 
          src={tenantListScreenshot}
          alt="screenshot">
        </img>
        <p>
          3) - View Tenant List - Once you’re logged in, you can see the list of tennants registered to DingDong in your building (Otherwise click DingDong at the top of your page), all residents should have been added into the system by the admin staff in the main office but if a new tenant arrives at reception you have the ability to add them to the system.
        </p>
        <img 
          className="about__image" 
          src={addTenantScreenshot}
          alt="screenshot">
        </img>
        <p>
          4) - Add Tenants -  It’s really straight forward, all you need to do is click “Add Tennant” at the top of the page. You will see the fields to enter the tenants details - First name, Surname, Email and Telephone. Type in details.
          Next, click the dropdown box, this gives you the list of flat numbers. Select the correct flat for the tenant you are adding. When all the fields are filled in press submit. Bingo, you’ve successfully added the tenant into the Ding Dong system.
        </p>
        <img 
          className="about__image" 
          src={dingDongSent}
          alt="screenshot">
        </img>
        <p>
          5) - Send a DingDong Notification - Simply find the tenant name in the tenant list or search for them by surname using the search bar situated above the list then select the parcel size and click 'Send DingDong'. The notification will be with them instantly so now you just need to wait for them to arrrive at the desk.
        </p>
        <img 
          className="about__image" 
          src={phoneScreenshot}
          alt="screenshot">
        </img>
        <p>
          6) The tennant is at the front desk and wants to pick up their package, ask to see the text notification (example above). Ask for their details, name and flat number, search by scrolling down. Once you’ve found the right tenant, click the collected button. 
        </p>
        <p>
          7) Once you no longer need to use Ding Dong remember to logout of your account. 
        </p>
        <p>
          © Created by 
          <a href="https://www.linkedin.com/in/nina-spray/">
            Nina Spray, 
          </a>
          <a href="https://www.linkedin.com/in/kallum-tolkien-758152105/">
            Kallum Tolkien 
          </a>
          and 
          <a href="https://www.linkedin.com/in/joanna-hughes-531b1844/">
            Joanna Hughes
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
