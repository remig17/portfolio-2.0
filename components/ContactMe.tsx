"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:remigallois@gmail.com?subject=${formData.subject}&body= Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          If you have any projects, feel free to{" "}
          <span className="border-b-4 border-[#5F00BA]/50">ask me.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#5F00BA] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+33670169093</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#5F00BA] h-7 w-7 animate-pulse" />
            <p className="text-2xl">remigallois@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#5F00BA] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Marseille - FRANCE</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="e-mail"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#5F00BA] py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
