import React, { useEffect, useState } from "react";
import "tippy.js/dist/tippy.css"; // Optional Tippy.js styling
import "../help.css"; // Add your own styling
import { productTips } from "../utils/help";
import tippy from "tippy.js";

const Mascot = () => {
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

  const [hide, setHide] = useState(false);

  const hideMascot = () => {
    // console.log("Before setting hide:", hide);
    setHide(true);
  };

  useEffect(() => {
    // console.log("After hide is updated:", hide);
  }, [hide]);

  return (
    !hide && (
      <div className="absolute bottom-0 right-3 w-1/6" id="mascot">
        <div className="flex p-2 shadow-md justify-center items-center space-x-2">
          <button
            disabled={currentStep === Object.keys(productTips).length} // Correct way to disable the button
            onClick={nextTip}
            className={`next-button ${
              currentStep === Object.keys(productTips).length
                ? "bg-blue-300 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>

          <button onClick={hideMascot} className="next-button">
            Skip
          </button>
        </div>
        <img src="/file.png" alt="mascot" />
      </div>
    )
  );
};

export default Mascot;
