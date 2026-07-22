import {

  Search,

  PencilRuler,

  Rocket,

  BarChart3,

  ArrowRight,

} from "lucide-react";



const steps = [

  {

    number: "01",

    title: "Discover",

    icon: Search,

    description:

      "We assess your organization's learning goals, workforce capabilities, and business objectives.",

  },

  {

    number: "02",

    title: "Design",

    icon: PencilRuler,

    description:

      "Customized learning pathways are created with industry-relevant content and certifications.",

  },

  {

    number: "03",

    title: "Deploy",

    icon: Rocket,

    description:

      "Programs are launched with seamless onboarding, mentoring, and learner engagement.",

  },

  {

    number: "04",

    title: "Measure",

    icon: BarChart3,

    description:

      "Track progress through dashboards, reports, and measurable business outcomes.",

  },

];



export default function Process() {

  return (

    <section

      className="section-md bg-white"

      id="process"

      aria-labelledby="process-heading"

    >

      <div className="container-custom">

<div className="mb-20 flex flex-col items-center text-center">



  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">

    Our Process

  </span>



  <h2

    id="process-heading"

    className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"

  >

    A Simple Process.

    <span className="block text-blue-600">

      Powerful Results.

    </span>

  </h2>



  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">

    Every engagement follows a structured journey—from understanding your

    business needs to measuring real learning impact across your workforce.

  </p>



</div>

<div className="relative hidden lg:block">



  <div className="absolute left-[12%] right-[12%] top-10 h-[2px] bg-slate-200">



    <div className="h-full w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />



  </div>



  <div className="grid grid-cols-4 gap-8">

{steps.map((step) => {

  const Icon = step.icon;



  return (

    <div key={step.number} className="relative text-center">



      {/* Timeline Node */}



      <div className="relative z-20 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white shadow-[0_15px_40px_rgba(37,99,235,.25)]">



        {step.number}



      </div>



      <div className="mx-auto h-8 w-px bg-slate-200" />



      {/* Card */}



      <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,.12)]">



        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">



          <Icon size={30} />



        </div>



        <h3 className="mt-6 text-2xl font-bold text-slate-900">

          {step.title}

        </h3>



        <p className="mt-4 flex-1 leading-8 text-slate-600">

          {step.description}

        </p>



        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">



          <span className="text-sm text-slate-500">

            Step {step.number}

          </span>



          <button className="inline-flex items-center text-sm font-semibold text-blue-600">



            Learn More



            <ArrowRight

              size={16}

              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"

            />



          </button>



        </div>



      </article>



    </div>

  );

})}

  </div>

</div>

<div className="space-y-6 lg:hidden mt-14">



  {steps.map((step) => {

    const Icon = step.icon;



    return (

      <article

        key={step.number}

        className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"

      >

        <div className="flex items-start gap-5">



          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold">



            {step.number}



          </div>



          <div>



            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">



              <Icon size={22} />



            </div>



            <h3 className="mt-5 text-2xl font-bold text-slate-900">

              {step.title}

            </h3>



            <p className="mt-3 leading-7 text-slate-600">

              {step.description}

            </p>



          </div>



        </div>

      </article>

    );

  })}



</div>

      </div>

    </section>

  );

}