import { FC } from 'react';

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
