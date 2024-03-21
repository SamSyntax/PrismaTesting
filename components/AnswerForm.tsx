"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";

const AnswerForm = ({ issueId }: { issueId: number }) => {
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/issue/${issueId}`, {
        content,
      });
      console.log("Answer posted:", response.data);
      router.refresh();
      // Optionally, you can update the UI to reflect the new answer
      setContent("");
    } catch (error) {
      console.error("Error posting answer:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2 ">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your answer"
        className="bg-card-foreground border-border/10 text-sm h-[20vh] text-start"
      />
      <Button
        className="transition-all ease-in-out duration-300 max-w-[200px]"
        variant={"default"}
        type="submit"
      >
        Submit Answer
      </Button>
    </form>
  );
};

export default AnswerForm;
