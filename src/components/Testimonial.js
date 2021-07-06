import React, { useState } from "react";
// import axios from "axios";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Lance Jarvis",
      location: "London, UK",
      designation: "General Manager",
      avatar: "https://testimonialapi.toolcarton.com/avatar/1.jpg",
      message:
        "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.8,
      audio: "https://testimonialapi.toolcarton.com/audio/1.mp3",
    },
    {
      id: 2,
      name: "Juliet Wright",
      location: "Sweden",
      designation: "Technical Director",
      avatar: "https://testimonialapi.toolcarton.com/avatar/2.jpg",
      message:
        "It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.4,
      audio: "https://testimonialapi.toolcarton.com/audio/2.mp3",
    },
    {
      id: 3,
      name: "Michael D.",
      location: "Austin, Texas",
      designation: "Investor",
      avatar: "https://testimonialapi.toolcarton.com/avatar/3.jpg",
      message:
        "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.5,
      audio: "https://testimonialapi.toolcarton.com/audio/3.mp3",
    },
    {
      id: 4,
      name: "Kylie Lutz",
      location: "Paris, France",
      designation: "Freelancer",
      avatar: "https://testimonialapi.toolcarton.com/avatar/4.jpg",
      message:
        "The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 5,
      audio: "https://testimonialapi.toolcarton.com/audio/4.mp3",
    },
    {
      id: 5,
      name: "Mark Twin",
      location: "Berlin, Germany",
      designation: "Developer",
      avatar: "https://testimonialapi.toolcarton.com/avatar/5.jpg",
      message:
        "Best company I have ever deal with online! Quick delivery and excellent customer service. Will definetly upgrade the service.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.5,
      audio: "https://testimonialapi.toolcarton.com/audio/5.mp3",
    },
    {
      id: 6,
      name: "Anne",
      location: "New York, USA",
      designation: "Content Writer & Artist",
      avatar: "https://testimonialapi.toolcarton.com/avatar/6.jpg",
      message:
        "These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.7,
      audio: "https://testimonialapi.toolcarton.com/audio/6.mp3",
    },
    {
      id: 7,
      name: "Bryan S.",
      location: "Sydney, Australia",
      designation: "Manager",
      avatar: "https://testimonialapi.toolcarton.com/avatar/7.jpg",
      message:
        "Love your stuff, the quality has been incredible year after year. I tell everyone I know that they have to try the product. Thank you to the team the whole team.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.7,
      audio: "https://testimonialapi.toolcarton.com/audio/7.mp3",
    },
    {
      id: 8,
      name: "Kamren Hays",
      location: "Florida, USA",
      designation: "Marketing Head",
      avatar: "https://testimonialapi.toolcarton.com/avatar/8.jpg",
      message:
        "Product bring 10x multiplier in terms of both ease and spread of use. I'm able to quickly and easily execute on my marketing strategies. That the fundamental difference from other services.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.8,
      audio: "https://testimonialapi.toolcarton.com/audio/8.mp3",
    },
    {
      id: 9,
      name: "Diane Smith",
      location: "New York, USA",
      designation: "Sales Head",
      avatar: "https://testimonialapi.toolcarton.com/avatar/9.jpg",
      message:
        "Team offers a powerful suite of tools that every client must have. And if you get stuck their support team will help out. Its is fast, reliable and has no complications at all.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.1,
      audio: "https://testimonialapi.toolcarton.com/audio/9.mp3",
    },
    {
      id: 10,
      name: "Mikayla Mccullough",
      location: "Madrid, Spain",
      designation: "Designer",
      avatar: "https://testimonialapi.toolcarton.com/avatar/10.jpg",
      message:
        "The vibe, level of inquiry, feedback and traffic at our product services and newly designed booth at a recent conference was very positive.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.9,
      audio: "https://testimonialapi.toolcarton.com/audio/10.mp3",
    },
  ];
  const [current, setCurrent] = useState(testimonials[0]);
  const [active, setActive] = useState(0);

  //   useEffect(() => {
  //     const getData = async () => {
  //       await axios
  //         .get("https://testimonialapi.toolcarton.com/api")
  //         .then((res) => {
  //           setTestimonials(res.data);
  //         })
  //         .catch((e) => console.log(e))
  //         .finally(setCurrent(testimonials[0]));
  //     };
  //     getData();
  //   }, []);

  const handleLeft = () => {
    if (active < 1) {
      setCurrent(testimonials[9]);
      setActive(9);
    } else {
      setCurrent(testimonials[active - 1]);
      setActive(active - 1);
    }
  };

  const handleSetEvent = (e) => {
    setCurrent(testimonials[e.target.getAttribute("data-testimonials")]);
    setActive(e.target.getAttribute("data-testimonials"));
  };

  const handleRight = () => {
    if (current.id > testimonials.length - 1) {
      setCurrent(testimonials[0]);
      setActive(0);
    } else {
      setCurrent(testimonials[current.id]);
      setActive(current.id);
    }
  };
  return (
    <div className="bg-blue-200 h-screen items-center py-16 flex">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-white sm:rounded-l-full ml-0 sm:ml-8">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 p-8 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="text-sm font-semibold mt-24 sm:mt-2 text-gray-900 mb-4 w-full">
            TESTIMONIALS
          </p>
          <div className="transition transition-opacity-100 duration-500 ease-in">
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
