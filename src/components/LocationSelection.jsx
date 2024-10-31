import React from "react";
import { data } from "../utils/data";
import { naviData } from "../utils/navigationData";

const LocationSelection = ({ setStart, setEnd }) => {
  return (
    <div className="p-2 flex space-x-5 absolute top-3 left-3 z-10">
      <div className="" id="start">
        <label className="block text-gray-700 font-medium mb-2">
          Select Starting Amenity:
          <select
            onChange={(e) => {
              const coords = e.target.value.split(",");
              setStart([parseInt(coords[0]), parseInt(coords[1])]);
            }}
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">--Select Start--</option>
            {/* Add options dynamically from the data here */}
            {Object.keys(naviData).map((key, index) => {
              return naviData[key].map((coords, subIndex) => {
                return (
                  <option
                    key={`${key}-${index}-${subIndex}`}
                    value={`${coords[0]},${coords[1]}`}
                  >
                    {key + (subIndex + 1)}
                  </option>
                );
              });
            })}
          </select>
        </label>
      </div>
      <div className="" id="end">
        <label className="block text-gray-700 font-medium mb-2">
          Select Ending Amenity:
          <select
            onChange={(e) => {
              setEnd(e.target.value);
            }}
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">--Select End--</option>
            <option value="washrooms">Washroom</option>
            <option value="shops">Shop</option>
            <option value="ticketCounter">Ticket Counter</option>
            <option value="benches">Bench</option>

            <option value="bridges">Bridge</option>
            <option value="platform1">PlatForm 1</option>
            <option value="platform2">PlatForm 2</option>
            <option value="waitingAreas">RestRoom</option>
            <option value="water">Water</option>
            <option value="entrances">Entrance</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default LocationSelection;
