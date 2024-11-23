import { DropdownProps } from "../../interface";
import pointer from "../../assets/point.svg";

const Dropdown = ({ question, answer, isOpen, onToggle }: DropdownProps) => {

  return (
    <div
      className="py-5 px-4 border-b cursor-pointer lg:w-[350px]"
      onClick={onToggle}
    >
      <div className={`flex items-center justify-between gap-6 hover:text-[#F47B56]  ${isOpen && "font-bold"}`}>
        <span className="text-[#4B4C5F] text-sm hover:text-[#F47B56]">{question}</span>
        <img src={pointer} alt="pointer" />
      </div>
      <div className={`${isOpen && "mt-3"} transition-all duration-300 ease-in-out `}>
      {isOpen && (
          <p className="text-[#787887] text-[12px] leading-[18px] max-w-[270px]">{answer}</p>
      )}
      </div>
    </div>
  );
};

export default Dropdown;
