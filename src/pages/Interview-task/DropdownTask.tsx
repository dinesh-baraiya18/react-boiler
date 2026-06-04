import { useState } from "react";

const countries = [
  {
    title: "India",
    states: [
      {
        title: "Gujarat",
        city: [
          { title: "Surat" },
          { title: "Ahmedabad" },
          { title: "Vadodara" },
        ],
      },
      {
        title: "Maharashtra",
        city: [
          { title: "Mumbai" },
          { title: "Pune" },
        ],
      },
      {
        title: "MP",
        city: [{ title: "Bhopal" }],
      },
    ],
  },
  {
    title: "USA",
    states: [
      {
        title: "California",
        city: [
          { title: "Los Angeles" },
          { title: "San Diego" },
        ],
      },
      {
        title: "Texas",
        city: [
          { title: "Houston" },
          { title: "Dallas" },
        ],
      },
    ],
  },
];

export default function DropdownTask() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const country = countries.find(
    (item) => item.title === selectedCountry
  );

  const states = country?.states || [];

  const state = states.find(
    (item) => item.title === selectedState
  );

  const cities = state?.city || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Country State City Dropdown</h2>

      {/* Country */}
      <div>
        <label>Select Country</label>
        <br />

        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedState("");
            setSelectedCity("");
          }}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option
              key={country.title}
              value={country.title}
            >
              {country.title}
            </option>
          ))}
        </select>
      </div>

      <br />

      {/* State */}
      {
        selectedCountry && (
          <div>
            <label>Select State</label>
            <br />

            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity("");
              }}
              disabled={!selectedCountry}
            >
              <option value="">Select State</option>

              {states.map((state) => (
                <option
                  key={state.title}
                  value={state.title}
                >
                  {state.title}
                </option>
              ))}
            </select>
          </div>
        )
      }

      <br />

      {/* City */}
      {
        selectedState && (
          <div>
            <label>Select City</label>
            <br />

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState}
            >
              <option value="">Select City</option>

              {cities.map((city) => (
                <option
                  key={city.title}
                  value={city.title}
                >
                  {city.title}
                </option>
              ))}
            </select>
          </div>
        )
      }

      <br />
      <br />
      <hr />
      <br />
      <br />


      <h3>Selected Values</h3>

      <p>Country: {selectedCountry}</p>
      <p>State: {selectedState}</p>
      <p>City: {selectedCity}</p>
    </div>
  );
}