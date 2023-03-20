import React from "react";

function NewProductBanner() {
  return (
    <div className="w-full h-72 relative rounded-sm">
      <img
        src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="h-full w-full object-cover"
      />
      <h1 className="absolute z-10 left-5 bottom-5 text-5xl text-white">
        New Product
      </h1>
      <div className="w-full h-full absolute top-0 bg-black bg-opacity-25" />
    </div>
  );
}

export default NewProductBanner;
