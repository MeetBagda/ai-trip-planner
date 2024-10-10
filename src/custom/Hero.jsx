import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="flex flex-col items-center mx-55 gap-9">
      <h1 className="font-extrabold text-[60px] mt-20 text-center leading-tight">
        <span className="text-orange-500">
          Plan Smarter, Travel Better with AI
        </span>
        : Your Ultimate Guide to Seamless Travel Experiences
      </h1>
      <p className="text-xl text-gray-400 text-center">
        Your personalized trip planner to explore destinations like never
        before, with seamless bookings.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free</Button>
      </Link>
      {/* screenshot of app */}
    </div>
  );
}

export default Hero;
