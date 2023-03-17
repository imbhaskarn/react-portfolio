import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-10">
      <div className="text-left text-2xl text-indigo-900 font-semibold py-4"> About Me </div>
      <p className="text-">
        Hello! My name is Bhaskar and I enjoy creating things that live on the
        internet. My interest in web development started back in 2017 when my
        freind asked me to build a lottery website. After so many efforts I was
        able to build a working website with php, Html, css. I also put this
        website on a domain that I bought from google. Fast-forward to today,
        and I’ve had the privilege of working with great engineers in the
        industry, a fintech start-up, and an early stage startup. My main focus
        these days is building accessible, inclusive products and digital
        experiences at EventRio. I am also taking a deep dive in cloud and
        design patterns.
      </p>
      <div className="p-6 ">
        <ul className="grid grid-cols-2 gap-4">
          <li className="flex flex-col">
            {" "}
            <span>React</span> <span>Node.JS</span> CSS<span>Django</span>{" "}
            <span>AWS</span>
          </li>
          <li className="flex flex-col">
            <span>Python</span> <span> Flask</span> Html<span></span> Postgres
            <span>MongoDB</span>
          </li>
        </ul>
        <div>
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" height='300px' width={'250px'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
