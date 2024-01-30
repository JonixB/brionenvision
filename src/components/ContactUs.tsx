import React from 'react';

const ContactUs: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-4">CONTACT US</h2>
        <p className="text-white text-xl mb-8">BOOK YOUR PHOTOSHOOT NOW!<br />Tell us about your shoot in as many details as possible!</p>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="text-black bg-white border-2 border-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300"
          >
            BOOK YOUR PHOTOSHOOT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
