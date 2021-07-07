import React, { useState, Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";
import axios from "axios";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState([]);
  const [active, setActive] = useState(0);
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 200);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://testimonialapi.toolcarton.com/api")
        .then((res) => {
          setTestimonials(res.data);
          setCurrent(res.data[0]);
        })
        .catch((e) => console.log(e));
    };
    getData();
  }, []);

  const handleLeft = () => {
    if (active < 1) {
      setCurrent(testimonials[9]);
      setActive(9);
    } else {
      setCurrent(testimonials[active - 1]);
      setActive(active - 1);
    }
    setIsShowing(false);
    resetIsShowing();
  };

  const handleSetEvent = (e) => {
    setCurrent(testimonials[e.target.getAttribute("data-testimonials")]);
    setActive(e.target.getAttribute("data-testimonials"));
    setIsShowing(false);
    resetIsShowing();
  };

  const handleRight = () => {
    if (current.id > testimonials.length - 1) {
      setCurrent(testimonials[0]);
      setActive(0);
    } else {
      setCurrent(testimonials[current.id]);
      setActive(current.id);
    }
    setIsShowing(false);
    resetIsShowing();
  };

  return (
    <div className="bg-blue-200 h-screen items-center py-16 flex">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-white sm:rounded-l-full ml-0 sm:ml-8">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 p-8 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="text-sm font-semibold mt-24 sm:mt-2 text-gray-900 mb-4 w-full">
            TESTIMONIALS
          </p>

          <div className="w-full bg-white">
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transform transition duration-1000"
              enterFrom="opacity-0 translate-x-full ease-in"
              enterTo="opacity-100 translate-x-0 "
              leave="transform duration-1000 transition ease-out"
              leaveFrom="opacity-100 translate-x-0 "
              leaveTo="opacity-0 translate-x-full"
            >
              <div>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {current.message}
                </h1>
                <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                  {current.lorem}
                </p>
                <div className="flex w-full flex-col sm:flex-row items-center sm:justify-between">
                  <div className="sm:hidden">
                    <img
                      alt="testimonials"
                      className="w-16 h-16 object-cover cursor-pointer object-center rounded-full mb-4"
                      src={current.avatar}
                    />
                  </div>
                  <div className="flex w-full flex-col sm:flex-row items-top sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-4 w-full">
                        {current.name},{" "}
                        <span className="font-medium text-sm text-gray-600">
                          {current.designation}
                          {", "}
                          {current.location}
                        </span>
                      </p>
                    </div>
                    <div className="text-blue-500">READ FULL STORY</div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div className="h-full flex p-4 rounded-lg"></div>
          <div className="flex w-full justify-center sm:justify-between space-x-4 items-center">
            <div className="flex space-x-2">
              {testimonials.map((data) => (
                <div className="hidden md:flex">
                  <img
                    alt="testimonials"
                    className={
                      data.id === current.id
                        ? "w-16 h-16 object-cover cursor-pointer object-center rounded-full p-1 border-transparent border-blue-700 border-4 border-solid transition duration-500 ease-in-out"
                        : "w-16 h-16 object-cover cursor-pointer object-center rounded-full p-1 border-transparent "
                    }
                    src={data.avatar}
                    onClick={(e) => handleSetEvent(e)}
                    data-testimonials={data.id - 1}
                    key={data.id - 1}
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              <button
                onClick={handleLeft}
                className="inline-flex text-gray-700 bg-gray-200 border-0 p-3 focus:outline-none hover:bg-gray-200 rounded-full text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <button
                onClick={handleRight}
                className="ml-2 inline-flex text-gray-700 bg-gray-200 border-0 p-3 focus:outline-none hover:bg-gray-200 rounded-full text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
