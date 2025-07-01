'use client'

import Contact from './Contact'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full sm:w-[95%] md:w-[90%] lg:w-[928px] xl:w-[1250px] 2xl:w-[1500px] px-[10px] m-auto min-h-[600px] flex flex-col lg:flex-row lg:justify-between py-12 gap-8 lg:gap-4 border"
    >
      {/* Left: Info + Links */}
      <div className="w-full lg:w-[60%] flex flex-col gap-8 pt-10 text-white">
        <div>
          <h4 className="text-[25px] font-medium text-green-400 mb-[1px]">Contact Me</h4>
          <h1 className="text-[40px] xl:text-4xl font-bold text-green-400">Get In Touch</h1>
        </div>

        <p className="text-[13px] w-full leading-relaxed max-w-2xl">
          Have a project in mind or just want to say hello? Feel free to reach out to me! I&apos;m
          always open to discussing new opportunities, collaborations, or any questions you may
          have. Let&apos;s connect and create something amazing together.
        </p>

        {/* Contact Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {/* Call */}
          <div className="relative h-[90px] w-full border border-gray-500 px-16 py-5 cursor-pointer hover:shadow-[0_10px_30px_4px_green] transition-all active:scale-95">
            <a href="tel:+919446979075" className="no-underline text-white">
              <i className="material-icons absolute left-6 top-6 text-green-400 text-[31px]">
                call
              </i>
              <h3 className="font-semibold">Call Me</h3>
              <p className="text-[12px] md:text-[14px]">+91 9446979075</p>
            </a>
          </div>

          {/* Email */}
          <div className="relative h-[90px] w-full border border-gray-500 px-16 py-5 cursor-pointer hover:shadow-[0_10px_30px_4px_green] transition-all active:scale-95">
            <a
              href="mailto:nittothomas94@gmail.com?subject=Interested%20to%20connect&body=Hi%20Nitto,%20I%20am%20interested%20to%20connect%20with%20you."
              className="no-underline text-white"
            >
              <i className="material-icons absolute left-6 top-6 text-green-400 text-[31px]">
                mail
              </i>
              <h3 className="font-semibold">Email Me</h3>
              <p className="text-[12px] md:text-[14px]">nittothomas94@gmail.com</p>
            </a>
          </div>

          {/* Location */}
          <div className="relative h-[90px] w-full border border-gray-500 px-16 py-5 cursor-pointer hover:shadow-[0_10px_30px_4px_green] transition-all active:scale-95">
            <a
              href="https://www.google.com/maps?q=Alappuzha"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-white"
            >
              <i className="material-icons absolute left-6 top-6 text-green-400 text-[31px]">
                pin_drop
              </i>
              <h3 className="font-semibold">Location</h3>
              <p className="text-[12px] md:text-[14px]">Alappuzha</p>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="relative h-[90px] w-full border border-gray-500 px-16 py-5 cursor-pointer hover:shadow-[0_10px_30px_4px_green] transition-all active:scale-95">
            <a
              href="https://wa.me/919446979075?text=Hi%20Nitto,%20I%20am%20interested%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-white"
            >
              <i className="fa-brands fa-whatsapp absolute left-6 top-6 text-green-400 text-[31px]" />
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-[12px] md:text-[14px]">Chat on WhatsApp</p>
            </a>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="w-full lg:w-[45%] px-[10px] lg:px-4 md:px-8">
        <Contact />
      </div>
    </section>
  )
}
