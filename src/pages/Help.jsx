import React, { useState, useEffect } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Optional Tippy.js styling
import "../help.css"; // Add your own styling
import Mascot from "../components/Mascot";

// Tips object
const productTips = {
  1: {
    step: 1,
    message:
      "Welcome to the app! Here you can select the starting point for navigation.",
    targetElement: "#startPointSelector", // Element to highlight
  },
  2: {
    step: 2,
    message: "The blue and purple lines display the available paths.",
    targetElement: "#mascot", // Element to highlight
  },
  3: {
    step: 3,
    message:
      "But, the purple line shows the shortest path to the selected amenities.",
    targetElement: "#shortestPathLine", // Element to highlight
  },
  4: {
    step: 4,
    message:
      "Here you can choose which amenities to navigate to, such as washrooms, shops, and more.",
    targetElement: "#amenitiesSelector", // Element to highlight
  },
  5: {
    step: 5,
    message:
      "Click here to start the navigation after selecting the path and amenities.",
    targetElement: "#startNavigationButton", // Element to highlight
  },
};

const Help = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    showTip(currentStep);
  }, [currentStep]);

  // Function to display the tooltip at the current step
  const showTip = (step) => {
    const tip = productTips[step];
    const target = document.querySelector(tip.targetElement);

    if (target) {
      tippy(target, {
        content: tip.message,
        trigger: "manual",
        onShow(instance) {
          instance.popper.classList.add("highlight"); // Add highlight styling
        },
      }).show();
    }
  };

  // Function to go to the next step
  const nextTip = () => {
    if (currentStep < Object.keys(productTips).length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const skip = () => {
    setCurrentStep(Object.keys(productTips).length);
  };

  return (
    <div>
      <h1>Interactive Map</h1>

      {/* Sample buttons/elements for demonstration */}
      <div id="startPointSelector" className="tip-target">
        Start Point Selector
      </div>
      <div id="pathDisplay" className="tip-target">
        Path Display
      </div>
      <div id="shortestPathLine" className="tip-target">
        Shortest Path
      </div>
      <div id="amenitiesSelector" className="tip-target">
        Amenities Selector
      </div>
      <div id="startNavigationButton" className="tip-target">
        Start Navigation Button
      </div>

      <button onClick={nextTip} className="next-button">
        Next Step
      </button>
      <button
        onClick={skip}
        className="bg-blue-500 ml-3 text-white hover:bg-blue-600 shadow-md rounded-md p-2"
      >
        Skip
      </button>
      <Mascot onNext={nextTip} />
    </div>
  );
};

export default Help;
