import React, { useState } from "react";
import Header from "../custom/Header";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "../constants/options";
import { Button } from "@/components/ui/button";
import LocationIQAutocomplete from "@/components/LocationIQAutocomplete/LocationIQAutocomplete.jsx";

function CreateTrip() {
  const handlePlaceChange = (value) => {
    console.log("Selected place:", value);
  };

  const [place, setPlace] = useState();

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 p-5 mt-10 text-start">
        <h2 className="font-bold text-3xl">
          Tell us your travel preferences 🏕️🌴
        </h2>
        <p className="text-xl text-gray-500 text-start">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </p>

        <div className="mt-10 flex flex-col gap-9">
          <div className="mt-10">
            <h2 className="font-medium my-3 text-xl">
              What is your destination choice?
            </h2>
            {/* <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: (v) => {
                  setPlace(v);
                  console.log(v);
                },
              }}
            /> */}
            <LocationIQAutocomplete />
          </div>

          <div>
            <h2 className="font-medium my-3 text-xl">
              How many days are you planning your trip?
            </h2>
            <Input placeholder={"Ex.3"} type="number" />
          </div>

          <div>
            <h2 className="font-medium my-3 text-xl">What is Your Budget?</h2>
            <p>
              The budget is exclusively allocated for activities and dining
              purposes.
            </p>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:shadow-xl flex flex-col gap-2 cursor-pointer"
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium my-3 text-xl">
              What do you plan on travelling with on your next adventure?
            </h2>

            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelsList.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:shadow-xl flex flex-col gap-2 cursor-pointer"
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                  <h2 className="text-sm text-gray-500">
                    People : {item.people}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 flex justify-end ">
          <Button>Generate Trip</Button>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
