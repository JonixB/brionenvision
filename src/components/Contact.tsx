import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white flex justify-center items-center h-[837px]">
      <form className="w-full max-w-xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="w-full px-3 mb-6 text-3xl font-bold text-center" style={{ fontFamily: 'Poppins, serif', fontSize: '16px' }}>CONTACT US</h2>
          <h2 className="w-full px-3 mb-6 text-3xl font-bold text-center" style={{ fontFamily: 'Adamina, serif', fontSize: '21px' }}>TELL US ABOUT YOUR CONTENT NEEDS!</h2>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane Doe" />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="jane@example.com" />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message" placeholder="Enter your message..."></textarea>
          </div>
          <div className="w-full px-3 text-center">
            <button
              className="border-2 border-black bg-white hover:bg-black hover:text-white text-black font-bold py-3 px-8 rounded transition-colors duration-300"
              type="submit"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
