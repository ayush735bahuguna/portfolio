import { SendHorizonal } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="w-screen flex justify-between flex-col md:px-40 max-md:px-5 bg-black"
    >
      <div className="py-20">
        <p className="text-4xl text-center font-bold text-white">Contact Me</p>
        <p className="text-center text-slate-300 p-4 pb-10">
          Let&apos;s Build Something Amazing Together
        </p>
        <div className="max-md:px-10">
          <form
            target="_self"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdti5JRGiwbsstAroKUebg9yKJ1mdCG5EKZpgsj48Y8H6bPrQ/formResponse"
            method="POST"
            className="flex justify-center w-full items-center flex-col gap-4 md:w-1/2 mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your e-mail"
              name="entry.243773728"
              required={true}
            />
            <Input
              type="text"
              name="entry.1876194739"
              placeholder="Message"
              required={true}
            />
            <Button type={"submit"} variant={"secondary"} className="w-full">
              Send &nbsp;
              <SendHorizonal size={17} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
