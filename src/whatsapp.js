import React from "react";

function Wbutton(props) {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Contact me on WhatsApp"
          href="https://wa.me/+212688880009}"
          target="_blank"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
            alt="WhatsApp"
          />
        </a>
      </div>
    </div>
  );
}

export default Wbutton;
