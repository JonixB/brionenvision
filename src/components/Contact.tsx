import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white flex justify-center items-center h-[837px]">
      <form className="w-full max-w-xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="w-full px-3 mb-6 text-3xl font-bold text-center">TELL US ABOUT YOUR CONTENT NEEDS!</h2>
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
          <div className="w-full px-3">
            <button className="shadow bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
