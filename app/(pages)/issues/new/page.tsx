"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();
  return (
    <div className="w-screen h-[85vh]  flex justify-center items-center">
      <form
        className="w-1/4 p-5 card flex flex-col gap-4 text-sm"
        onSubmit={handleSubmit(async (data) => {
          await axios.post("/api/create-issue", data);
          router.push("/issues");
          router.refresh();
        })}
      >
        <Input
          placeholder="Title"
          className="bg-card-foreground border-border/10 text-sm"
          {...register("title")}
        />
        <Textarea
          placeholder="Description"
          className="bg-card-foreground border-border/10 text-sm"
          {...register("description")}
        />
        <Button
          className="transition-all ease-in-out duration-300"
          variant={"default"}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
