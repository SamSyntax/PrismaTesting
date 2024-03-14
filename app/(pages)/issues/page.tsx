import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <main className="p-8">
      <div>
        <Button variant={"default"} className="rounded-[3px]" size={"sm"}>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
    </main>
  );
};

export default IssuesPage;
