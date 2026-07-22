"use client";



import { useState } from "react";

import {

  X,

  User,

  Mail,

  Building2,

  MessageSquare,

  ArrowRight,

  Sparkles,

  CheckCircle2,

} from "lucide-react";





interface DemoModalProps {

  isOpen: boolean;

  onClose: () => void;

}





export default function DemoModal({

  isOpen,

  onClose,

}: DemoModalProps) {





  const [loading,setLoading] = useState(false);



  const [success,setSuccess] = useState("");



  const [error,setError] = useState("");







  const [formData,setFormData] = useState({



    name:"",

    email:"",

    company:"",

    message:"",



  });







  if(!isOpen) return null;









  const handleChange = (

    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

  )=>{



    setFormData((prev)=>({



      ...prev,



      [e.target.name]:e.target.value,



    }));



  };











  const handleSubmit = async(

    e:React.FormEvent<HTMLFormElement>

  )=>{





    e.preventDefault();



    setLoading(true);



    setSuccess("");



    setError("");







    try{





      const response = await fetch("/api/demo",{



        method:"POST",



        headers:{

          "Content-Type":"application/json",

        },



        body:JSON.stringify(formData),



      });







      const data = await response.json();







      if(!response.ok){



        throw new Error(

          data?.message || "Something went wrong"

        );



      }









      setSuccess(

        data?.message ||

        "Request submitted successfully!"

      );







      setFormData({



        name:"",

        email:"",

        company:"",

        message:"",



      });







    }catch(err){





      setError(

        err instanceof Error

        ? err.message

        : "Something went wrong"

      );





    }finally{



      setLoading(false);



    }





  };













  return (



    <div className="

      fixed

      inset-0

      z-[100]

      flex

      items-center

      justify-center

      bg-slate-950/50

      px-4

      backdrop-blur-md

    ">





      <div className="

        relative

        w-full

        max-w-2xl

        rounded-[40px]

        bg-white

        p-8

        shadow-[0_40px_100px_rgba(37,99,235,.18)]

        md:p-12

      ">







        {/* Close */}



        <button



          onClick={onClose}



          className="

            absolute

            right-6

            top-6

            flex

            h-10

            w-10

            items-center

            justify-center

            rounded-full

            bg-slate-100

            text-slate-600

            transition

            hover:bg-slate-200

          "



        >



          <X size={20}/>



        </button>











        {/* Header */}





        <div className="text-center">





          <div className="

            mx-auto

            flex

            h-14

            w-14

            items-center

            justify-center

            rounded-2xl

            bg-blue-50

          ">



            <Sparkles

              size={28}

              className="text-blue-600"

            />



          </div>









          <p className="

            mt-6

            text-sm

            font-semibold

            uppercase

            tracking-[0.25em]

            text-blue-600

          ">



            Enterprise Learning Solutions



          </p>











          <h2 className="

            mt-4

            text-4xl

            font-extrabold

            text-slate-900

          ">



            Enquire Now



          </h2>









          <p className="

            mx-auto

            mt-4

            max-w-lg

            leading-7

            text-slate-600

          ">



            Connect with our learning experts and

            discover the right solution to build

            future-ready teams.



          </p>





        </div>











        {/* FORM */}



        <form

          onSubmit={handleSubmit}

          className="

            mt-10

            space-y-6

          "

        >

          {/* Name */}



          <div>



            <label className="

              mb-2

              flex

              items-center

              gap-2

              text-sm

              font-semibold

              text-slate-800

            ">



              <User

                size={17}

                className="text-blue-600"

              />



              Full Name



            </label>





            <input



              name="name"



              value={formData.name}



              onChange={handleChange}



              placeholder="Enter your name"



              required



              className="

                w-full

                rounded-xl

                border

                border-slate-200

                bg-white

                px-5

                py-4

                text-slate-900

                placeholder:text-slate-400

                outline-none

                transition

                focus:border-blue-500

                focus:ring-4

                focus:ring-blue-100

              "



            />



          </div>











          {/* Email */}





          <div>





            <label className="

              mb-2

              flex

              items-center

              gap-2

              text-sm

              font-semibold

              text-slate-800

            ">





              <Mail

                size={17}

                className="text-blue-600"

              />





              Work Email





            </label>







            <input



              name="email"



              type="email"



              value={formData.email}



              onChange={handleChange}



              placeholder="Enter your email address"



              required



              className="

                w-full

                rounded-xl

                border

                border-slate-200

                bg-white

                px-5

                py-4

                text-slate-900

                placeholder:text-slate-400

                outline-none

                transition

                focus:border-blue-500

                focus:ring-4

                focus:ring-blue-100

              "



            />





          </div>















          {/* Company */}





          <div>





            <label className="

              mb-2

              flex

              items-center

              gap-2

              text-sm

              font-semibold

              text-slate-800

            ">





              <Building2

                size={17}

                className="text-blue-600"

              />





              Company Name





            </label>









            <input



              name="company"



              value={formData.company}



              onChange={handleChange}



              placeholder="Enter company name"



              required



              className="

                w-full

                rounded-xl

                border

                border-slate-200

                bg-white

                px-5

                py-4

                text-slate-900

                placeholder:text-slate-400

                outline-none

                transition

                focus:border-blue-500

                focus:ring-4

                focus:ring-blue-100

              "



            />





          </div>













          {/* Message */}





          <div>





            <label className="

              mb-2

              flex

              items-center

              gap-2

              text-sm

              font-semibold

              text-slate-800

            ">





              <MessageSquare

                size={17}

                className="text-blue-600"

              />





              Requirements





            </label>









            <textarea



              name="message"



              value={formData.message}



              onChange={handleChange}



              placeholder="Tell us about your learning requirements"



              rows={4}



              className="

                w-full

                resize-none

                rounded-xl

                border

                border-slate-200

                bg-white

                px-5

                py-4

                text-slate-900

                placeholder:text-slate-400

                outline-none

                transition

                focus:border-blue-500

                focus:ring-4

                focus:ring-blue-100

              "



            />





          </div>













          {/* Button */}





          <button



            disabled={loading}



            className="

              group

              flex

              w-full

              items-center

              justify-center

              rounded-xl

              bg-blue-600

              py-4

              font-semibold

              text-white

              shadow-lg

              transition

              hover:-translate-y-1

              hover:bg-blue-700

              disabled:opacity-50

            "



          >





            {loading ? (



              "Submitting..."



            ) : (



              <>



                Submit Request





                <ArrowRight

                  size={18}

                  className="

                    ml-2

                    transition

                    group-hover:translate-x-1

                  "

                />





              </>



            )}





          </button>







        </form>











        {/* Messages */}





        {success && (



          <div className="

            mt-5

            rounded-xl

            bg-green-50

            px-5

            py-4

            text-sm

            font-medium

            text-green-700

          ">



            {success}



          </div>



        )}







        {error && (



          <div className="

            mt-5

            rounded-xl

            bg-red-50

            px-5

            py-4

            text-sm

            font-medium

            text-red-700

          ">



            {error}



          </div>



        )}













        {/* Trust Card */}





        <div className="

          mt-10

          rounded-2xl

          bg-slate-50

          p-6

        ">





          <div className="

            mb-5

            flex

            items-center

            justify-center

            gap-2

            text-sm

            font-semibold

            text-slate-700

          ">





            <CheckCircle2

              size={18}

              className="text-blue-600"

            />





            Trusted by leading organizations





          </div>











          <div className="

            grid

            grid-cols-3

            text-center

          ">





            <div>



              <p className="

                text-2xl

                font-extrabold

                text-blue-600

              ">



                500+



              </p>





              <span className="

                text-xs

                text-slate-500

              ">



                Partners



              </span>





            </div>











            <div className="

              border-x

              border-slate-200

            ">





              <p className="

                text-2xl

                font-extrabold

                text-blue-600

              ">



                1M+



              </p>





              <span className="

                text-xs

                text-slate-500

              ">



                Learners



              </span>





            </div>











            <div>





              <p className="

                text-2xl

                font-extrabold

                text-blue-600

              ">



                95%



              </p>





              <span className="

                text-xs

                text-slate-500

              ">



                Satisfaction



              </span>





            </div>







          </div>





        </div>







      </div>





    </div>





  );



}