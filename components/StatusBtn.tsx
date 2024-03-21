"use client";
import axios from "axios";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import classNames from "classnames";

interface Props {
  status: string | undefined;
  icon: any;
  id: number;
}

const StatusBtn = ({ status, icon, id }: Props) => {
  const router = useRouter();
  const handleUpdate = async () => {
    const response = await axios.patch(`/api/issue/${id}`, {
      status: status === "OPEN" ? "CLOSED" : "OPEN",
    });
    router.refresh();
    console.log("Status updated:", response.data);
  };
  return (
    <div className="">
      <Button
        onClick={handleUpdate}
        className={classNames({
          "flex w-28 justify-center bg-transparent gap-2 items-center h-8 rounded-sm border border-accent-foreground text-[.5rem] overflow-hidden":
            true,
          "bg-destructive": status === "CLOSED",
        })}
      >
        {icon}
        <p>{status}</p>
      </Button>
    </div>
  );
};

export default StatusBtn;
