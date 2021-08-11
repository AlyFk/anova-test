import React from "react";
import { ReactComponent as ErrorIcon } from "assets/svg/error.svg";
import Alert from "./Alert";

interface ErrorAlertProps {
  title: string;
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, title }) => {
  return <Alert message={message} title={title} Icon={ErrorIcon} color="red" />;
};

export default ErrorAlert;
