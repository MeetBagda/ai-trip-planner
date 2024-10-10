import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "./custom/Header";
import Hero from "./custom/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
