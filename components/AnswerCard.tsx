"use client";

import React from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  id: number;
  content: string;
}

const AnswerCard = ({ id, content }: Props) => {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <div className="flex w-full gap-2 items-center justify-center ">
        <div className="min-w-full flex items-center justify-between border border-accent-foreground px-8 py-4 rounded-md">
          <div className="w-full">
            <div className="flex flex-col justify-end items-center">
              <div className="w-full flex items-center justify-start mb-2">
                <FaTrashAlt
                  onClick={async () => {
                    await axios.delete(`/api/issue/${id}`);
                    router.refresh();
                  }}
                  className="max-w-[12px] max-h-[12px] cursor-pointer hover:text-destructive transition-colors ease-in-out duration-300"
                />
              </div>
            </div>
            <p className="text-justify text-muted-foreground">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
