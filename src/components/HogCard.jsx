import { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
  const [isHidden, setIsHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function handleDetailsClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }

  // hide the hog
  if (isHidden) return null;

  // show the hog
  const { name, specialty, image } = hog;

  return (
    <div aria-label="hog card" className="ui card eight wide column pigTile" onClick={handleDetailsClick}>
      <div className="image">
        <img src={image} alt={`Photo of ${name}`} />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
        <div className="description">Specialty: {specialty}</div>
      </div>
      <div className="extra content">
        {showDetails ? <HogDetails hog={hog} /> : null}

        <button className="ui button" onClick={() => setIsHidden(true)}>
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;
