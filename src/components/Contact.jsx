import { Fragment } from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { IoIosMail, IoMdCall } from "react-icons/io";
import { TiLocationArrow } from "react-icons/ti";

import ContactForm from "./ContactForm";
import Heading from "./Heading";

function Contact() {
  return (
    <Fragment>
      <div
        id="contact"
        className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <Heading text="Get in Touch" />

        {/* Flex Container with Grid-based Layout for Perfect Alignment */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-center text-3xl text-white p-4 md:text-start xl:max-w-lg m-auto ">
              Contact Info
            </h2>
            <div className="flex flex-col items-start bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-10">
              {/* Location */}
              <div className="flex items-center gap-4 group">
                <TiLocationArrow
                  size="1.8rem"
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                <p className="group-hover:text-cyan-400 text-white  transition-colors">
                  Bangalore, Karnataka
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <IoMdCall
                  size="1.8rem"
                  className="text-green-400 group-hover:scale-110 transition-transform"
                />
                <p className="group-hover:text-green-400 text-white  transition-colors">
                  <a href="tel:+917204482283">+91-9663575353</a>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <IoIosMail
                  size="1.8rem"
                  className="text-yellow-400 group-hover:scale-110 transition-transform"
                />
                <p className="group-hover:text-yellow-400 text-white  transition-colors">
                  <a href="mailto:rakshithks13@gmail.com">
                    rakshithks13@gmail.com
                  </a>
                </p>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 group">
                <GrGithub
                  size="1.8rem"
                  className="text-gray-400 group-hover:scale-110 transition-transform"
                />
                <p className="group-hover:text-gray-400 text-white transition-colors">
                  <a
                    href="https://github.com/rakshithks13"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <GrLinkedin
                  size="1.8rem"
                  className="text-blue-500 group-hover:scale-110 transition-transform"
                />
                <p className="group-hover:text-blue-500 text-white  transition-colors">
                  <a
                    href="https://www.linkedin.com/in/rakshith-k-s-67a836b4/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
