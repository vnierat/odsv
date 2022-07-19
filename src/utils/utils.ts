import { Status } from "../enums/status";
import SuccessIcon from "../assets/svgs/success.svg";
import FailureIcon from "../assets/svgs/error.svg";
import WarningIcon from "../assets/svgs/warning.svg";

export const getIconType = (energy: string) => {
  switch (energy) {
    case Status.FAILURE:
      return FailureIcon;
    case Status.SUCCESS:
      return SuccessIcon;
    case Status.WARNING:
      return WarningIcon;
  }
};

export const dateFormatter = (date: string) => {
  const dateFormat = new Date(date).toLocaleDateString("fr-FR");
  const time = new Date(date).toLocaleTimeString("fr", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dateFormat} ${time}`;
};
