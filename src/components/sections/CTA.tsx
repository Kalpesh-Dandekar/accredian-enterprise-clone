import Image from "next/image";
import Button from "../common/Button";

export default function CTA() {
  return (
    <section className="section-sm bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[24px] bg-[#2F80ED] px-8 py-10 lg:px-14 lg:py-12">
          {/* Background Circles */}
          <div className="absolute -right-20 -top-20 h-[460px] w-[460px] rounded-full border-[48px] border-white/5" />
          <div className="absolute right-12 top-20 h-[300px] w-[300px] rounded-full border-[42px] border-white/5" />
          <div className="absolute right-44 top-40 h-[160px] w-[160px] rounded-full border-[28px] border-white/5" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
                <Image
                  src="/support icon.png"
                  alt="Support"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold leading-tight text-white lg:text-[34px]">
                  Want to Learn More About Our Training Solutions?
                </h2>

                <p className="mt-3 text-lg leading-7 text-white/90">
                  Get expert guidance and discover the right learning solution
                  for your organization's growth.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <Button className="rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-[#2F80ED] shadow-md transition hover:bg-slate-100">
                Contact Us
                <span className="ml-2 text-xl">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}