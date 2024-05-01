import React from "react";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function About() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center pt-28 justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Get in touch
            <span className="text-pink-500"> with us</span>
          </h1>
          <p className="mt-12">
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you! Simply fill out the form below with your details and
            message, and we'll get back to you as soon as possible. Your
            feedback is invaluable to us!
          </p>
          <Link to="/">
            <button className="btn btn-secondary hover:bg-pink-600 mt-6">
              Go Back
            </button>
          </Link>
          <div className="max-w-screen-2xl mt-20 container mx-auto md:px-20 px-4 flex  flex-col md:flex-row my-10">
            <div className="w-full pt-16  md:pt-5 md:w-1/2 order-2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <FaHome size={36} />
                </div>
                <div>
                  <h2 className="text-lg text-left mb-1 font-semibold">
                    Address
                  </h2>{" "}
                  <p className="text-gray-600">18 Street Fablo, Florida, USA</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <FaPhoneAlt size={36} />
                </div>
                <div>
                  <h2 className="text-lg text-left mb-1 font-semibold">
                    Phone
                  </h2>{" "}
                  <p className="text-gray-600">+1-305-929-6000</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <MdEmail size={36} />
                </div>
                <div>
                  <h2 className="text-lg text-left mb-1 font-semibold">
                    Email
                  </h2>{" "}
                  <p className="text-gray-600"> bookstoreabcd1@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="w-full  md:w-1/2 order-1  md:order-2 ">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                <input
                  type="text"
                  className="block w-full placeholder:text-lg dark:bg-slate-900 dark:text-white outline-none h-14   rounded-md shadow-sm sm:text-sm"
                  placeholder="Your Full Name"
                  required
                  {...register("name", { required: true })}
                />
                <input
                  type="email"
                  className="block w-full placeholder:text-lg dark:bg-slate-900 dark:text-white outline-none h-14 rounded-md shadow-sm sm:text-sm"
                  placeholder="Your Email Address"
                  required
                  {...register("email", { required: true })}
                />
                <textarea
                  rows="6"
                  className="block w-full placeholder:text-lg dark:bg-slate-900 dark:text-white outline-none h-14 rounded-md shadow-sm sm:text-sm"
                  placeholder="Your Message"
                  required
                  {...register("message", { required: true })}
                ></textarea>
                <button className=" bg-secondary text-white rounded-md px-3 py-1 block   hover:bg-pink-700 duration-200">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
