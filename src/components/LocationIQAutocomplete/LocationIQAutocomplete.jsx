import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LocationIQAutocomplete() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const apiKey = import.meta.env.VITE_LOCATIONIQ_API_KEY;
  const [error, setError] = useState(null);

  // Debounce setup to prevent too many requests
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length > 2) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]); // Clear suggestions if input is cleared
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setError(null); // Clear any previous error
  };

  const fetchSuggestions = async (searchQuery) => {
    try {
      const res = await axios.get(
        `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${searchQuery}&limit=5`
      );
      setSuggestions(res.data); // Set suggestions based on API response
    } catch (error) {
      console.error("Error fetching autocomplete data:", error);
      if (error.response && error.response.status === 429) {
        setError("Too many requests, please wait a moment.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleSuggestionClick = (place) => {
    console.log("Selected Place: ", place.display_name);
    setQuery(place.display_name); // Set the clicked place in the input field
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a location"
        className="border p-2 rounded"
      />

      {/* Display error message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Display Suggestions */}
      {suggestions.length > 0 && (
        <ul className="border rounded mt-2 p-2 bg-white">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="cursor-pointer p-2"
              onClick={() => handleSuggestionClick(suggestion)} // Log the clicked suggestion
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
