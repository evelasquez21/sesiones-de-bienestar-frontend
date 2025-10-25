import React from "react";

interface Button {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (React.MouseEventHandler<HTMLButtonElement>);
}

const InputField: React.FC<Button> = ({ text, type, onClick}) => {
  return (
    <div className="flex flex-col w-full mb-4">      
      <button
      type={type}
      className="bg-blue-200 border-1 border-blue-300 text-blue-900 rounded-lg py-2 hover:transition-all hover:duration-350 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 active:transition-all active:bg-blue-100 active:text-blue-500 active:border-blue-500"
      onClick={onClick}
      >{text}</button>
    </div>
  );
};

export default InputField;
