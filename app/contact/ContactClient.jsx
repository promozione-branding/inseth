"use client";

import { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setplace] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // try {
    //   const formData = {
    //     platform: "Sangam Garbage Bag Contact Form",
    //     platformEmail: "info@sangamgarbagebags.com",
    //     name,
    //     phone,
    //     email,
    //     place,
    //     product: requirement,
    //     message,
    //   };

    //   const { data } = await axios.post(
    //     "https://brandbnalo.com/api/form/add",
    //     formData,
    //   );

    //   if (data?.success) {
    //     setStatus("success");

    //     // const whatsappText = `Hi, I am ${name}.
    //     //   Email: ${email}
    //     //   Product: ${requirement}
    //     //   City: ${place}
    //     //   Message: ${message}
    //     //   Contact: ${phone}`;

    //     // setTimeout(() => {
    //     //   window.open(
    //     //     `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
    //     //       whatsappText
    //     //     )}`,
    //     //     "_blank"
    //     //   );
    //     // }, 1000);

    //     setName("");
    //     setPhone("");
    //     setEmail("");
    //     setplace("");
    //     setRequirement("");
    //     setMessage("");
    //   } else {
    //     setStatus("error");
    //   }
    // } catch (error) {
    //   console.log(error);

    //   setStatus("error");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: "url('/bghero.jpg')" }}
        className="relative h-[60vh] overflow-hidden bg-cover flex justify-center items-center bg-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-3">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl max-w-5xl mx-auto">
            Feel free to contact with us any time.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-gray-100 py-10 md:py-16 px-3 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-9 md:mb-16">
          {/* Phone */}
          <div className="bg-[#e57f29] text-white p-6 md:p-8 rounded-2xl shadow-lg">
            {/* Header */}
            <div className="text-center mb-7">
              <Phone size={40} className="mx-auto mb-3" />
              <h3 className="text-2xl font-bold">Call Us</h3>
              <p className="text-white text-sm mt-1">
                Get in touch with our team
              </p>
            </div>

            {/* Contact List */}
            <div className="space-y-4">
              {/* JK Seth */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold text-lg mb-2">JK Seth</h4>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="tel:+919810013496"
                    className="text-white hover:text-white hover:underline transition"
                  >
                    +91-9810013496
                  </a>

                  <a
                    href="tel:+919810113436"
                    className="text-white hover:text-white hover:underline transition"
                  >
                    +91-9810113436
                  </a>
                </div>
              </div>

              {/* Deepak Seth */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold text-lg mb-2">Deepak Seth</h4>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="tel:+919873933882"
                    className="text-white hover:text-white hover:underline transition"
                  >
                    +91-9873933882
                  </a>

                  <a
                    href="tel:+917678654958"
                    className="text-white hover:text-white hover:underline transition"
                  >
                    +91-7678654958
                  </a>
                </div>
              </div>

              {/* Ashmeet Bhatia */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold text-lg mb-2">Ashmeet Bhatia</h4>

                <a
                  href="tel:+919953738992"
                  className="text-green-50 hover:text-white hover:underline transition"
                >
                  +91-9953738992
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white border-2 border-[#e57f29] p-6 md:p-8 rounded-2xl shadow-lg text-center">
            <Mail size={40} className="mx-auto mb-4 text-[#e57f29]" />

            <h3 className="text-xl font-bold text-[#e57f29] mb-2">Email ID</h3>

            <a
              href="mailto:jmdautomationsystems@gmail.com"
              className="text-gray-800 font-bold text-lg hover:text-[#e57f29] transition break-all"
            >
              JMDAUTOMATIONSYSTEMS@GMAIL.COM
            </a>

            {/* Logo */}
            <div className="mt-6 flex justify-center">
              <Image
                height={100}
                width={100}
                src="/logo.png"
                alt="JMD Automation Systems"
                className="w-auto md:!h-80 object-cover"
              />
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#e57f29] flex flex-col justify-between text-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
            {/* Icon */}
            <div>
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/15 flex items-center justify-center">
                <MapPin size={30} />
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Office Address
              </h3>

              {/* Address */}
              <a
                href="https://insethsons.com/contact-us.html#map"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/90 leading-relaxed text-lg hover:text-white transition-colors duration-300"
              >
                M-145, Street Number 9, Block M,
                <br />
                Shastri Nagar, Delhi, 110052
              </a>

              {/* View Map */}
              <a
                href="https://insethsons.com/contact-us.html#map"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-white text-[#e57f29] rounded-lg font-semibold text-sm hover:bg-orange-50 transition-all duration-300"
              >
                <MapPin size={16} />
                View on Map
              </a>
            </div>

            {/* Follow Us */}
            <div className=" pt-6 border-t border-white/20">
              <h4 className="text-base font-semibold mb-4">Follow Us</h4>

              <div className="flex justify-center items-center gap-3">
                {/* Facebook */}
                <a
                  href="/"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#e57f29] transition-all duration-300"
                >
                  <BsFacebook size={25} />
                </a>

                {/* Instagram */}
                <a
                  href="/"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#e57f29] transition-all duration-300"
                >
                  <BsInstagram size={25} />
                </a>

                {/* Linkedin */}
                <a
                  href="/"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#e57f29] transition-all duration-300"
                >
                  <BsLinkedin size={25} />
                </a>

                {/* Twitter / X */}
                <a
                  href="/"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#e57f29] transition-all duration-300"
                >
                  <BsTwitter size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* FORM */}
          <div className="bg-white p-4 md:p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Send Us Your Requirement
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="Phone Number"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={place}
                  onChange={(e) => setplace(e.target.value)}
                />

                <select
                  className="border rounded-lg px-4 py-3 w-full bg-[#e57f29] text-white font-semibold"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                >
                  <option value="">Select Product</option>
                  {/* <option value="Black Garbage Bags">
                    Biodegradable Garbage Bags
                  </option>
                  <option value="Green Garbage Bags">
                    Disposable Garbage Bags
                  </option>
                  <option value="Biomedical Waste Bags">
                    Biomedical garbage bags
                  </option> */}
                </select>
              </div>

              <input
                type="email"
                required
                placeholder="Email Address"
                className="border rounded-lg px-4 py-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="border rounded-lg px-4 py-3 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#e57f29] hover:bg-[#fd7200] transition text-white px-6 py-3 rounded-lg font-semibold w-full"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-green-600 font-semibold mt-2">
                  Thank you! Our team will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* map */}
          <div className="mt-5">
           
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5473563420346!2d77.1724795!3d28.6732689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe2677e6d40d%3A0x1af1600902fb7268!2sI%20N%20SETH%20SONS!5e0!3m2!1sen!2sin!4v1786947347982!5m2!1sen!2sin"
             
              loading="lazy"
              className="w-full h-120"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
