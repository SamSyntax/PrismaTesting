import classNames from "classnames";
import React from "react";

interface Props {
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  status: string;
  hover?: boolean;
}

const IssueCard: React.FC<Props> = ({
  title,
  description,
  createdAt,
  updatedAt,
  status,
  hover,
}: Props) => {
  return (
    <div
      className={classNames({
        "w-full flex bg-card-foreground border-ring border p-2 justify-between rounded-md text-xs":
          true,
        "hover:scale-[99%] transition-transform ease-in-out duration-150":
          hover === true,
      })}
    >
      <div className="flex-1">
        <p>{createdAt}</p>
      </div>
      <div className="flex-1">
        <p
          className={classNames({
            "text-green-700": status === "OPEN",
            "text-secondary": status === "IN_PROGRESS",
            "text-destructive": status === "CLOSED",
          })}
        >
          {status}
        </p>
      </div>
      <div className="flex-1">{title}</div>
      <div className="flex-1">
        {description.length > 45
          ? description.substring(0, 45) + "..."
          : description}
      </div>
    </div>
  );
};

export default IssueCard;
