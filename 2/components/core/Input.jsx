import Image from "next/image";
import CalendarIcon from "../../assets/datepicker.svg";

const Input = ({ title, icon, multiline, placeholder }) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="italic font-normal text-white">{title}</div>
      <div className="flex-1 flex items-center space-x-3 px-3 py-1.5 text-lg text-white  border border-grey-light">
        {icon && <Image width="25" height="25" src={CalendarIcon} />}
        {multiline ? (
          <textarea
            className="flex-1 placeholder-opacity-50 bg-transparent outline-none resize-none placeholder-grey-light placeholder:italic"
            placeholder={placeholder}
          />
        ) : (
          <input className="flex-1 bg-transparent outline-none" />
        )}
      </div>
    </div>
  );
};

export default Input;
