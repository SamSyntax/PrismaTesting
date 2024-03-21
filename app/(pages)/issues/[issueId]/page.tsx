import prisma from "@/prisma/client";
import React from "react";
import { TbCalendarUp } from "react-icons/tb";
import { MdOutlineWebhook } from "react-icons/md";
import AnswerForm from "@/components/AnswerForm";
import StatusBtn from "@/components/StatusBtn";
import AnswerCard from "@/components/AnswerCard";
import { ComboboxPopover } from "@/components/Popover";

const page = async ({ ...props }) => {
  const id = parseInt(props.params.issueId);
  const getPost = await prisma.issue.findFirst({
    where: { id: id },
    include: { answer: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-12 pb-24">
      <div className="flex w-full items-center justify-center px-8 ">
        <div className="flex-1 text-start text-xs">
          <article className="flex w-32 justify-center gap-2 items-center h-10 p-2 rounded-sm border border-accent-foreground text-[.6rem]">
            <TbCalendarUp />
            <p>{getPost?.createdAt.toDateString()}</p>
          </article>
        </div>
        <h1 className="font-bold flex-1 text-center ">{getPost?.title}</h1>
        <div className="flex-1 text-start text-xs flex justify-end ">
          {/* <StatusBtn
            icon={<MdOutlineWebhook />}
            id={id}
            status={getPost?.status}
          /> */}
          <ComboboxPopover status={getPost?.status} />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-screen items-center justify-center">
        <p>Description</p>
        <div className="w-[40vw] border border-accent-foreground px-8 py-4 rounded-md">
          <p className="text-justify text-muted-foreground">
            {getPost?.description}
          </p>
        </div>
        <div className="w-[40vw] flex justify-center flex-col items-center gap-2 mt-4">
          <div className="flex w-full items-center justify-center mb-12">
            <AnswerForm issueId={id} />
          </div>
          <h1>Answers</h1>
          {getPost?.answer.map((answer) => (
            <div key={answer.id} className="w-full">
              <AnswerCard content={answer.content} id={answer.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
