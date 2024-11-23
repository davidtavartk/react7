import cardImage from "../../../assets/card-image.png";

const LeftCard = () => {
    return (
      <div className="w-1/2">
        <img 
          src={cardImage} 
          alt="card-image" 
          className="absolute max-lg:top-[-8px] left-1/2 max-lg:transform max-lg:-translate-x-1/2 -translate-y-1/2 lg:left-[-60px]" 
        />
      </div>
    );
  };
  

export default LeftCard;