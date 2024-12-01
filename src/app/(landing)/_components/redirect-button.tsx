"use client"

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

const RedirectButton = () => {
  return (
    <Button variant={"outline"} type="button" onClick={() => redirect("about:blank")}>
      Exit
    </Button>
  );
};

export default RedirectButton;
