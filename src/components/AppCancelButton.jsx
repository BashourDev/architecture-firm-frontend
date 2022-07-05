import React from "react";
import Loading from "./Loading";

const AppCancelButton = ({
  Icon,
  children,
  className,
  type = "button",
  isLoading,
  onClick,
  ...otherProps
}) => {
  // const { handleSubmit, errors, dirty } = useFormikContext();

  //   const handleClick = () => {
  //     if (!dirty || Object.keys(errors).length > 0) {
  //       handleSubmit();
  //     }
  //   };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`outline-none rounded-md px-3 py-1 transition duration-100 h-12 bg-gray-300 text-dark-blue hover:bg-gray-200 text-sm lg:text-base ${className}`}
      {...otherProps}
    >
      {Icon && <Icon />}
      {isLoading ? <Loading className={"w-8 h-8"} /> : children}
    </button>
  );
};

export default AppCancelButton;
