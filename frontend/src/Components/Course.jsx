import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cards from "../Components/Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">
            Welcome to our online haven for book lovers! Dive into our extensive
            collection where literary treasures await discovery. From timeless
            classics to contemporary bestsellers, our curated selection caters
            to every reader's taste. Explore our comprehensive library,
            including both free and paid titles, and embark on a journey through
            the captivating world of literature. Start browsing and let the
            adventure begin!
          </p>
          <Link to="/">
            <button className="btn btn-secondary hover:bg-pink-600 mt-6">
              Go Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
