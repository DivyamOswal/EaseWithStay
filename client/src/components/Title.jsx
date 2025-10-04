import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-left">
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold">
        {title}
      </h2>
      {subtitle && (
        <p
          className="
            text-gray-700 mt-2 font-medium
            text-sm sm:text-base md:text-lg
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
