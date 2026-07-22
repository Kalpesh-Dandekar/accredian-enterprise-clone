import Image from "next/image";

import {

  FaFacebookSquare,

  FaInstagram,

  FaLinkedin,

  FaTwitter,

  FaYoutube,

} from "react-icons/fa";

import Button from "../common/Button";



const links = [

  "Programs",

  "Enterprise Solutions",

  "Success Stories",

  "About Accredian",

  "Contact",

];



export default function Footer() {

  return (

    <footer className="relative overflow-hidden bg-slate-950 text-white">



      {/* Background Glow */}



      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />



      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />





      <div className="container-custom relative z-10 py-20">





        {/* Top Section */}



        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">





          {/* Brand */}



          <div>



            <Image

              src="/logo.png"

              alt="Accredian"

              width={190}

              height={60}

              priority

            />





            <p className="mt-6 max-w-sm text-base leading-8 text-slate-300">



              Empowering enterprises with future-ready learning

              solutions, industry expertise, and measurable workforce

              transformation.



            </p>







            {/* Social */}



            <div className="mt-8 flex gap-3">





              <a

                href="#"

                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"

              >

                <FaFacebookSquare />

              </a>





              <a

                href="#"

                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"

              >

                <FaLinkedin />

              </a>





              <a

                href="#"

                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:bg-sky-500 hover:text-white"

              >

                <FaTwitter />

              </a>





              <a

                href="#"

                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:bg-pink-500 hover:text-white"

              >

                <FaInstagram />

              </a>





              <a

                href="#"

                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:bg-red-500 hover:text-white"

              >

                <FaYoutube />

              </a>





            </div>



          </div>





          {/* Explore */}



          <div>



            <h3 className="text-lg font-bold text-white">

              Explore

            </h3>





            <ul className="mt-6 space-y-4">



              {links.map((link)=>(

                <li key={link}>



                  <a

                    href="#"

                    className="text-slate-300 transition hover:text-blue-400"

                  >

                    {link}

                  </a>



                </li>

              ))}



            </ul>



          </div>





          {/* Contact */}



          <div>



            <h3 className="text-lg font-bold text-white">

              Contact Us

            </h3>





            <div className="mt-6 space-y-5 text-slate-300">





              <p>

                Email:

                <br />



                <span className="text-blue-400">

                  enterprise@accredian.com

                </span>

              </p>





              <p className="leading-7">



                4th Floor, 250 Phase IV,

                <br />



                Udyog Vihar, Sector 18,

                <br />



                Gurugram, Haryana



              </p>





            </div>



          </div>





        </div>





        {/* CTA */}

        {/* CTA */}



        <div className="mt-16 flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row">



          <div>



            <h3 className="text-2xl font-bold text-white">

              Ready to Transform Your Workforce?

            </h3>



            <p className="mt-3 max-w-xl text-slate-300">

              Connect with our learning experts and build a customized

              enterprise training strategy for your organization.

            </p>



          </div>





          <Button

            className="shrink-0 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg transition hover:bg-slate-100"

          >



            Enquire Now



          </Button>





        </div>







        {/* Bottom Divider */}



        <div className="mt-14 border-t border-white/10 pt-8">



          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">





            <p className="text-sm text-slate-400">



              © {new Date().getFullYear()} Accredian • A Brand of FullStack

              Education Pvt. Ltd. All Rights Reserved.



            </p>





            <div className="flex gap-6 text-sm text-slate-400">



              <a

                href="#"

                className="transition hover:text-white"

              >

                Privacy Policy

              </a>





              <a

                href="#"

                className="transition hover:text-white"

              >

                Terms of Service

              </a>





            </div>





          </div>



        </div>





      </div>



    </footer>

  );

}