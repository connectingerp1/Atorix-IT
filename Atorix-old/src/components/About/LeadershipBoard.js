import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    title: "Director",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/jOi5d1qzc7NWQGBvquXi1TZXzcv8nUp-8RyTBz3wBZc.jpg",
    info: "John is an experienced entrepreneur and the visionary CEO of our company. With over 15 years of leadership experience in the industry, he has driven innovation and strategic growth, positioning the company as a market leader. John is dedicated to creating a collaborative and dynamic work environment, fostering both personal and professional growth for all team members.",
  },
]; 

const LeadershipBoard = () => {
  const ceo = teamMembers.find((member) => member.title === "Director");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center">Leadership Board</h2>
        <p className="text-lg text-gray-600 text-center mt-2 ">Meet the mind behind our success.</p>

        <div className="mt-6 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-10 max-w-5xl mx-auto" data-aos="zoom-in">
          {/* Left Side - Large Image */}
          {ceo && (
            <>
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <img
                  src={ceo.imageUrl}
                  alt={ceo.name}
                  className="w-80 h-80 object-cover rounded-full border-2 border-purple-900"
                />
                <p className="text-2xl font-semibold text-black-900">{ceo.title}</p>
              </div>

              {/* Right Side - Text Content */}
              <div className="md:w-2/3 w-80 h-80 pt-8 md:pl-10 text-center md:text-left mt-6 md:mt-0">
                <h3 className="text-2xl font-bold text-black-800">{ceo.name}</h3>
                <p className=" text-lg mt-4 leading-relaxed  text-black-600 ">{ceo.info}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadershipBoard;
