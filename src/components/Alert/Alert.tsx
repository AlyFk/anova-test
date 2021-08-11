import React from "react";

interface AlertProps {
  color: string;
  title: string;
  message: string;
  Icon: React.FunctionComponent;
}

const Alert: React.FC<AlertProps> = ({ color, Icon, title, message }) => {
  return (
    <div
      className={`alert flex flex-row items-center bg-${color}-200 p-5 rounded border-b-2 border-${color}-300`}
    >
      <div
        className={`alert-icon flex items-center bg-${color}-100 border-2 border-${color}-500 justify-center h-10 w-10 flex-shrink-0 rounded-full`}
      >
        <span className={`text-${color}-500`}>
          <Icon />
        </span>
      </div>
      <div className="alert-content ml-4">
        <div className={`alert-title font-semibold text-lg text-${color}-800`}>
          {title}
        </div>
        <div className={`alert-description text-sm text-${color}-600`}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Alert;
