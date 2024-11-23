import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";

const Card = () => {
  return (
    <div className="flex relative shadow-custom-shadow bg-white rounded-[23px] gap-0 max-w-[920px] lg:w-7/12 lg:h-[520px]">
      <div className="w-full m-auto flex max-lg:flex-col justify-center items-center lg:gap-20 lg:flex-row lg:py-16 lg:px-8">
        <LeftCard />
        <RightCard />
      </div>
    </div>
  );
};

export default Card;
