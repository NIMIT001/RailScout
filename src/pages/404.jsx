import React from "react";

const NotFound = () => {
  return (
    <div
      className="h-full w-full bg-cover flex flex-col justify-center items-center space-y-9"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830027.jpg?w=826&t=st=1726742022~exp=1726742622~hmac=d5ad18ff491992c109f9aded22e136dfd751686b920d925b9b4d835319f1050f')`, // replace with your wallpaper URL
      }}
    >
      <h1 className="text-9xl font-extrabold text-blue-400">404</h1>
      <h1 className="text-5xl font-extrabold text-black">
        Oops! The page does not exist
      </h1>
      <h1 className="text-3xl text-gray-700">
        Sorry! We couldn’t find the page.
      </h1>
      <h1 className="rounded-3xl text-white text-sm p-3 cursor-pointer hover:bg-blue-600 bg-blue-500 shadow-md">
        Go back to Homepage --{">"}
      </h1>
    </div>
  );
};

export default NotFound;
