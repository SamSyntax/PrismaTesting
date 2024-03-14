"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="w-screen h-[88vh] p-5 card flex flex-col gap-4 text-sm">
      <Input
        placeholder="Title"
        className="bg-card-foreground border-border/10 text-sm"
      />
      <Textarea
        placeholder="Description"
        className="bg-card-foreground border-border/10 text-sm"
      />
      <Button
        className="transition-all ease-in-out duration-300"
        variant={"default"}
      >
        Submit
      </Button>
    </div>
  );
};

export default NewIssuePage;
