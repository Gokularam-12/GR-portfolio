import React from "react";

export const Contact = () => {
  return (
    <section className="px-6 py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 border-b-2 border-gray-600 inline-block">
          Contact
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          Let’s connect! Feel free to reach out for internships, collaborations, or just a chat.
        </p>
        <div className="mt-6 space-y-3 text-gray-400 text-md">
          <p>
            📍 <strong>Address:</strong> 540 Thiruppachetthi, Sivagangai, Tamil Nadu
          </p>
          <p>
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:gokularamrm@gmail.com" className="hover:text-white underline">
              gokularamrm@gmail.com
            </a>
          </p>
          <p>
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:+918870213343" className="hover:text-white underline">
              +91 8870213343
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
