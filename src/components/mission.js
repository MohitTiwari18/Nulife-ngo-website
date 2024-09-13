import React from "react";
import "./mission.css";
import ChildImg from "../../images/childImg.png";
import ElderImg from "../../images/eldersImg.png";
import DisableImg from "../../images/disabilityImg.png";

const mission = () => {
  return (
    <>
      
        <div class="missionText">
          <h1>Monthly Giving Missions</h1>
        </div>

        <div class="allCard">
          <div class="second">
            <img class="image" src={ChildImg} />
            <h3>Mission: No Child Hungry</h3>
            <a href="detail" class="child-btn">
              Feed a child
            </a>
          </div>

          <div class="second">
            <img class="image" src={ElderImg} />
            <h3>Mission: #EldersLivesMatter</h3>
            <a href="detail" class="child-btn">
              Support the elderly
            </a>
          </div>

          <div class="second">
            <img class="image" src={DisableImg} />
            <h3>Mission: Equality in Disablity</h3>
            <a href="detail" class="child-btn">
              Support the differently abled
            </a>
          </div>
        </div>
      
    </>
  );
};

export default mission;
