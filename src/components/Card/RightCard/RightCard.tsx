import { useState } from "react";
import { faqData } from "../../../dummy_data";
import Dropdown from "../../Dropdown/Dropdown.tsx";

const RightCard = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-lg:m-auto max-lg:mt-24 max-lg:mb-10 lg:mr-28">
      <h1 className="text-[32px] text-[#1E1F36] font-bold px-4 text-center">FAQs</h1>
      <div className="mt-8 transition-all duration-300 ease-in-out">
        {faqData.map((faq, index) => (
          <Dropdown
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleDropdownToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightCard;
