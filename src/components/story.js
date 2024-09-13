import React, { useState } from "react";
import "./story.css";
import Story1 from "../../images/story1.png";
import Story2 from "../../images/story2.png";
import Story3 from "../../images/story3.png";

const Popup = ({ title, image, fullStory, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{fullStory}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Card = ({ title, image, content, onReadMore }) => {
  return (
    <div className="cards">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{content}</p>
      <button onClick={onReadMore}>Read More</button>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const togglePopup = (title, image, fullStory) => {
    setPopupContent({ title, image, fullStory });
    setShowPopup(!showPopup);
  };

  const cardsData = [
    {
      title: "LAVANAYA",
      image: Story1,
      content:
        "Some people say i am unlucky. My father went away when i was born, and later my mother died in an accident But i think i am very lucky - because i got a second mother. just when i felt i had been orphaned and had no one to love m, Maa brought me to my new home...",
      fullStory:
        "Some people say I am unlucky. My father went away when I was born, and later my mother died in an accident. But I think I am very lucky because I got a second mother. Just when I felt I had been orphaned and had no one to love me, Maa brought me to my new home. She is my mother's cousin sister. I got my own sister in her daughter Shobha. We have grown up together, go to the same school, and share everything with each other. Shobha's father died five years ago. Since then, Maa has been working in the factory. There is never enough food at home, but whatever we eat, she always divides equally between me and Shobha. I do not remember much about my mother. But Maa makes sure we always take her  name in prayer. Sometimes I wonder what would have happened to had I not met her. Lavanya and Shobha both study in Class 4 at Smile Foundation's Mission Education centre in Hyderabad.",
    },
    {
      title: "DIKSHA",
      image: Story2,
      content:
        "When you lose your parents, your life is turned upside down. Two years ago, i lost my mother. Last year, I lost my father in a road accident. I felt a huge empty space in my  heart. it's painful and uncomfortable sometimes envy other people who have parents...",
      fullStory:
        "When you lose your parents, your life is turned upside down. Two years ago, I lost my mother. Last year, I lost my father in a road accident. I felt a huge empty space in my heart. It's painful and uncomfortable. I sometimes envy other people who have parents- and when they complain about something their mom or dad did, I choke down my tears in silence. I keep thinking if only I had more time with them. I think about what I would have said and seek forgiveness for what I failed to do for them. In witnessing my parents die young, suddenly life felt very short, and each moment became incredibly important. It is heart breaking- not having them in a world where I am growing, learning, and accomplishing little goals. I love them and miss them. Attending school gives me a sense of purpose and meaning in life. I will become something that my parents would be proud of. Diksha is one of the brightest students at Smile Foundation's Mission Education in Darjeeling, West Bengal. She lives with her paternal uncle.",
    },
    {
      title: "RITA MAJHI",
      image: Story3,
      content:
        "My father is a farmer, working on oters people's land for a daily wage.Despite all the other troubling issues in his life, he ensures that nothing affects my education. He is okay with remaining hungry but is never prepared to watch me give up on learning. He views my...",
      fullStory:
        "My father is a farmer, working on other people's land for a daily wage. Despite all the other troubling issues in his life, he ensures that nothing affects my education. He is okay with remaining hungry but is never prepared to watch me give up on learning. He views my education as a promise that I will work hard to keep. Rita studies in Class 1 at Smile Foundation's Mission Education centre, Dapta in Kalahandi, Odisha.",
    },
    {
      title: "Card 3",
      image: Story3,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more card data as needed
  ];

  return (
    <div className="app">
      <div class="story">STORIES OF CHANGE</div>
      <div className="container">
        {cardsData.slice(0, 3).map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            content={card.content}
            onReadMore={() =>
              togglePopup(card.title, card.image, card.fullStory)
            }
          />
        ))}
      </div>
      {showPopup && (
        <Popup
          title={popupContent.title}
          image={popupContent.image}
          fullStory={popupContent.fullStory}
          onClose={() => setShowPopup(false)}
        />
      )}
      {cardsData.length > 3 && (
        <div className="view-all-container">
          <button
            className="view-all-button"
            onClick={() => alert("View All Clicked!")}
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
