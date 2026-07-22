import Image from "next/image";
import Button from "../common/Button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Tailored Enterprise Learning Programs",
  "Industry Recognized Certifications",
  "Measurable Business Outcomes",
];

export default function Hero() {
  return (
    <section className="section-lg relative overflow-hidden bg-white">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-200/20 blur-[140px]" />
      </div>

      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[38px] border border-[#dbeafe] bg-[#eef5ff] shadow-[0_25px_80px_rgba(37,99,235,0.08)]">
          {/* Decorative Circles */}
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-blue-200/40" />
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-blue-200/40" />

          <div className="grid items-center gap-12 px-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-16">
            {/* LEFT */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
                <span className="text-sm font-semibold text-blue-700">
                  🚀 Trusted by 500+ Enterprise Clients
                </span>
              </div>

              <h1 className="mt-7 max-w-[620px] text-[2.8rem] font-extrabold leading-[1.08] tracking-[-1px] text-slate-900 md:text-[3.5rem] lg:text-[4.2rem]">
                Transform Your{" "}
                <span className="text-[#2563eb]">Workforce</span>
                <br />
                Into Future-Ready
                <br />
                Professionals
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-slate-600">
                Empower your workforce through industry-leading learning
                programs, practical certifications and measurable upskilling
                outcomes designed specifically for modern enterprises.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 size={18} className="text-green-600" />
                    </div>

                    <span className="text-[15px] font-medium text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex items-center gap-5">
                <Button className="px-8 py-3.5">Book a Demo</Button>

                <div className="hidden text-sm text-slate-500 lg:block">
                  No commitment • Free consultation
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}
              <div className="absolute bottom-8 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[90px]" />

              {/* Dotted Background */}
              <div
                className="absolute right-12 top-8 hidden h-[320px] w-[320px] opacity-40 lg:block"
                style={{
                  backgroundImage:
                    "radial-gradient(#93c5fd 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              <div className="relative transition-all duration-500 hover:-translate-y-2">
                <div className="relative">
                  {/* Top Badge */}
                  <div className="absolute -left-10 top-8 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-xl lg:block">
                    <p className="text-xs font-medium text-slate-500">
                      Learning Progress
                    </p>

                    <h4 className="mt-1 text-2xl font-bold text-[#2563eb]">
                      92%
                    </h4>
                  </div>

                  {/* Bottom Badge */}
                  <div className="absolute -right-6 bottom-10 z-20 hidden rounded-2xl bg-white px-5 py-4 shadow-xl lg:block">
                    <p className="text-xs font-medium text-slate-500">
                      Employee Growth
                    </p>

                    <h4 className="mt-1 text-2xl font-bold text-emerald-600">
                      +48%
                    </h4>
                  </div>

                  <Image
                    src="/hero-illustration.png"
                    alt="Enterprise Learning"
                    width={700}
                    height={650}
                    priority
                    className="relative z-10 w-full max-w-[620px] object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}