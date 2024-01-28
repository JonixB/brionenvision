import React from 'react';

const Contact: React.FC = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const mailto = `mailto:brionenvision@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AReply to: ${encodeURIComponent(email)}`;
    window.location.href = mailto;
  };



  return (
    <div className="bg-white flex justify-center items-center h-[837px]">
      <form className="w-full max-w-xl" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="w-full px-3 mb-6 text-3xl font-bold text-center" style={{ fontFamily: 'Poppins, serif', fontSize: '16px' }}>CONTACT US</h2>
          <h2 className="w-full px-3 mb-6 text-3xl font-bold text-center" style={{ fontFamily: 'Adamina, serif', fontSize: '21px' }}>TELL US ABOUT YOUR CONTENT NEEDS!</h2>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" placeholder="Jane Doe" required />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" name="email" type="email" placeholder="jane@example.com" required />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message" name="message" placeholder="Enter your message..." required ></textarea>
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
