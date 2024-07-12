import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap fmax-lg:lex-col">
        <div className="flex flex-col items-start mt-2">
          <a href="/">
            <img src={footerLogo} alt="logo" height={40} width={230} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat sm:max-w-sm ">
            Get shoes ready for the new term at your interest Nike store. Find
            your perfect size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((e) => (
              <div className="flex justify-center items-center w-9 h-9 bg-white rounded-full">
                <img src={e.src} alt={e.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-1 justify-between  gap-20 flex-wrap ">
          {footerLinks.map((sec) => (
            <div key={sec.title} className="mb-6">
              <h4 className="text-2xl font-montserrat leading-normal font-medium mb-6">
                {sec.title}{" "}
              </h4>
              <ul>
                {sec.links.map((t) => (
                  <li className="mt-3 justify-start font-montserrat text-base leading-normal hover:text-slate-300 cursor-pointor ">
                    <a href={t.link}>{t.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-8 max-sm:items-center max-sm:flex-col ">
        &#169; Copyright. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
