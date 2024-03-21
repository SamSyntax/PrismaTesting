import IssueCard from "@/components/IssueCard";
import Refreshbtn from "@/components/Refreshbtn";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import Link from "next/link";
import React from "react";
import { IoMdRefresh } from "react-icons/io";

async function getIssues() {
  const issues = await prisma.issue.findMany({
    orderBy: { status: "asc" },
  });

  return issues;
}

const IssuesPage = async () => {
  const issues = await getIssues();
  return (
    <main className="p-8 flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-4 min-w-[40vw] max-w-[50vw]">
        <div className="w-full">
          <Refreshbtn />
        </div>
        <IssueCard
          title={"Title"}
          description={"Description"}
          createdAt={"Date"}
          status={"Status"}
        />
        {issues.map((issue) => (
          <div key={issue.id}>
            <Link href={`/issues/${issue.id}`}>
              <IssueCard
                title={issue.title}
                description={issue.description}
                createdAt={issue.createdAt.toDateString()}
                status={issue.status}
                hover={true}
              />
            </Link>
          </div>
        ))}
        <Link href="/issues/new">
          <Button
            variant={"default"}
            className="rounded-[3px] max-w-"
            size={"sm"}
          >
            New Issue &rArr;
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default IssuesPage;
