import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-10">
      <div className="text-left font-semibold py-4"> About Me </div>
      <p className="text-">
        Hello! My name is Brittany and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS! Fast-forward to
        today, and I’ve had the privilege of working at an advertising agency, a
        start-up, a huge corporation, and a student-led design studio. My main
        focus these days is building accessible, inclusive products and digital
        experiences at Upstatement for a variety of clients. I also recently
        launched a course that covers everything you need to build a web app
        with the Spotify API using Node & React.
      </p>
      <div>
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
      </div>
    </div>
  );
};

export default ProfileCard;
