import React from 'react';

const Home = () => {
  return (
    <div className="font-sans text-center p-5">
      <header className="bg-gray-800 text-white p-5 rounded">
        <h1 className="text-4xl font-bold">Welcome to My Home Page</h1>
        <p className="text-lg">Your one-stop destination for awesome content.</p>
      </header>
      <main className="mt-5">
        <section className="my-5 p-5 border border-gray-300 rounded">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p>
            We are passionate about creating web applications that make life
            easier. Explore our website to learn more!
          </p>
        </section>
        <section className="my-5 p-5 border border-gray-300 rounded">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p>
            We offer a range of services including web development, mobile app
            development, and UX/UI design.
          </p>
        </section>
        <section className="my-5 p-5 border border-gray-300 rounded">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>Feel free to reach out to us for any inquiries or collaborations.</p>
        </section>
      </main>
      <footer className="mt-10 text-gray-600">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
