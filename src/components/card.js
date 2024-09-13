import React from "react";
import "./card.css";
import Img1 from "../../images/1 image.png";
import Img2 from "../../images/2 image.png";
import Img3 from "../../images/3 image.png";
import Img4 from "../../images/4 image.png";
import Img5 from "../../images/5 image.png";
import Img6 from "../../images/6 image.png";
import Img7 from "../../images/7 image.png";
import Img8 from "../../images/8 image.png";

const card = () => {
  return (
    <>
      <div class="allCard">
        <div class="first">
          <img class="card-1" src={Img1} />
          <p>Primary and Secondary education for Children</p>
        </div>

        <div class="first">
          <img class="card-1" src={Img2} />
          <p>Regular Health check-ups & nutrition support</p>
        </div>

        <div class="first">
          <img class="card-1" src={Img3} />
          <p>Training and capacity building of teachers</p>
        </div>

        <div class="first">
          <img class="card-1" src={Img4} />
          <p>Vocational Education & Skill Training</p>
        </div>

        <div class="first">
          <img class="card-1" src={Img5} />
          <p>
            Music,Sports,life Skills education to promote socio-emotional well
            being
          </p>
        </div>

        <div class="first">
          <img class="card-1" src={Img6} />
          <p>
            Infrastructure development, STEM learning programmes with government
            schools
          </p>
        </div>

        <div class="first">
          <img class="card-1" src={Img7} />
          <p>Digital literacy and learning access to rural & tribal chidren</p>
        </div>

        <div class="first">
          <img class="card-1" src={Img8} />
          <p>
            Merit-based scholarship for girl children focused on hoilstic
            development
          </p>
        </div>
      </div>
    </>
  );
};

export default card;
