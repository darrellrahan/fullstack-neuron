import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="bg-gradient-to-r from-[#F1F5F8] to-[#F0F0F0]]">
        <div className="flex justify-between p-20 gap-20">
          <div className="basis-[35%]">
            <img
              src="/assets/logo.svg"
              alt="logo"
              width={200}
              height={30}
              className="mb-10"
            />
            <h4 className="text-[#333435] font-bold">
              PT. Neuronworks Indonesia
            </h4>
            <p className="text-[#333435] py-4">
              Komp. Buah Batu Regency A2 No.9 - 10 Kel. Kujangsari / Cijawura
              Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia.
            </p>
            <div className="flex gap-2">
              <img src="/assets/telephone.svg" alt="telephone" />
              <p className="text-[#333435]">(022) 87309898</p>
            </div>
            <div className="flex gap-2 py-4">
              <img src="/assets/whatsapp.svg" alt="whatsapp" />
              <p className="text-[#333435]">(+62) 85159380018</p>
            </div>
            <div className="flex gap-2">
              <img src="/assets/mail.svg" alt="e-mail" />
              <p className="text-[#333435]">support@neuronworks.co.id</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-16 basis-[65%]">
            <div className="flex flex-col gap-4">
              <h6 className="text-[#333435] font-bold">Services</h6>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Multimedia
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Customer Relation Management
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                System Integrator
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Work Management System
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Business Intellegence
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Web Application
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Mobile Application
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[#333435] font-bold">Company</h6>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                About
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Contact
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Article
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Investment
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[#333435] font-bold">Our product</h6>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                DOOR HRMIS
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                MASTRIS
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                SUSTERS
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                SMS MERDEKA
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                ISSUKU
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                NEMO
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[#333435] font-bold">Follow us</h6>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Facebook
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Instagram
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Youtube
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Linkedin
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Twitter / X
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[#333435] font-bold">Other navigation</h6>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Terms & conditions
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Privacy policy
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Neuron academy (LMS)
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                ISO Certification
              </a>
              <a href="/" className="text-[#637381] hover:text-[#D61924]">
                Public Relation
              </a>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-[#D61924] text-white font-normal">
          <h6>© PT. Neuronworks Indonesia 2023 - All right reserved</h6>
        </div>
      </div>
    </section>
  );
}

export default Footer;
