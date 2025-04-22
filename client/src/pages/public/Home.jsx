import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[70vh]  px-12 md:px-0 flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-5xl/13 mb-5 font-bold text-center">
          Welcome to Whisp!
        </h1>
        <p className="md:mb-8 mb-5 text-xl font-semibold">
          Speak freely. Stay anonymous.
        </p>
        <div className="flex gap-4">
          {!token ? (
            <>
              <Link
                className="bg-blue-400 text-white font-bold py-2 px-10 rounded-2xl"
                to="/register"
              >
                Register
              </Link>
              <Link
                className="bg-blue-400 text-white font-bold py-2 px-10 rounded-2xl"
                to="/login"
              >
                Login
              </Link>
            </>
          ) : (
            <Link
              className="bg-blue-400 text-white font-bold py-2 px-10 rounded-2xl"
              to="/create"
            >
              Start posting
            </Link>
          )}
        </div>
      </section>
      <section className="text-center p-12">
        <h2 className="text-3xl font-bold pb-12 underline">What We Offer</h2>
        <div className="card-row flex justify-center items-center flex-wrap md:gap-[150px] gap-10 ">
          <Card
            title="Anonymous Posting"
            text="Share your thoughts without revealing your identity — zero judgments, total freedom."

          />
          <Card
            title="Community Vibes"
            text="Connect with others through honest confessions. Read, react, and relate."
          />
          <Card
            title="Safe & Secure"
            text="We value your privacy. No tracking, no exposure — just a safe space to vent."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
