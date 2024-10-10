import React from "react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="flex shadow-sm justify-between items-center">
      <img src="/logo.svg" />
      <Button>Sign in</Button>
    </div>
  );
}

export default Header;
