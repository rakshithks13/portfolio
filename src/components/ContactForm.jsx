import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Message from "./Message";
const keyData = {
  service_id: "service_nob3pjs",
  template_id: "template_10agg7t",
  public_key: "5KmFB-AwO9InnTcgc",
};

export default function ContactForm() {
  const initData = { from_name: "", from_email: "", message: "" };
  const [contactData, setContactData] = useState(initData);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  }

  async function handleEmailSend(e) {
    e.preventDefault();

    const { from_name, from_email, message } = contactData;
    if (from_name && from_email && message) {
      try {
        await emailjs
          .sendForm(
            keyData.service_id,
            keyData.template_id,
            formRef.current,
            keyData.public_key
          )
          .then((res) => console.log(res.text));
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } catch (error) {
        console.log(error.text);
        setErr(true);
        setTimeout(() => setErr(false), 3000);
      }

      setContactData(initData);
    }
    return;
  }
  return (
    <div className="bg-slate-500/30 p-10 flex-grow md:bg-inherit md:p-4">
      {err ? <Message type="err" /> : success ? <Message type="success" /> : ""}
      <div>
        <h2 className="text-center text-3xl text-white p-4 md:text-start xl:max-w-lg m-auto ">
          Get in touch
        </h2>
      </div>
      <form
        ref={formRef}
        className="flex flex-col gap-6 items-start xl:max-w-lg lg:m-auto "
        onSubmit={handleEmailSend}
      >
        <div className="w-full max-w-md">
          <div className="w-16 text-xl text-gray-300">
            <label htmlFor="Name">Name</label>
          </div>
          <input
            type="text"
            name="from_name"
            value={contactData.from_name}
            onChange={handleChange}
            className="h-10 rounded-md w-full px-2 outline-none  border-2 focus:border-red-400  "
          />
        </div>
        <div className="w-full max-w-md">
          <div className="w-16 text-xl text-gray-300">
            <label htmlFor="Email">Email</label>
          </div>
          <input
            type="text"
            name="from_email"
            value={contactData.from_email}
            onChange={handleChange}
            className="h-10 rounded-md w-full px-2 outline-none border-2 focus:border-red-400  "
          />
        </div>
        <div className="w-full max-w-md">
          <div className="w-16 text-xl text-gray-300">
            <label htmlFor="Message">Message</label>
          </div>
          <textarea
            type="text"
            name="message"
            value={contactData.message}
            onChange={handleChange}
            className="h-20 w-full rounded-md px-2 outline-none border-2 focus:border-red-400  "
          />
        </div>
        <div className="w-full max-w-md text-center">
          <button
            type="submit"
            className="rounded-md bg-blue-500 w-full
              p-2 text-white text-lg font-semibold hover:bg-blue-500/80 "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
