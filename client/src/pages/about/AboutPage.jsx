import React from "react";
import MainLayout from "../../components/MainLayout";
import AboutImg from "../../assets/about-img.jpg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="container mt-16 mx-auto py-10 px-5 text-black">
        <div className="w-full flex flex-col max-w-4xl mx-auto font-DM_Sans">
          <div className="flex flex-col gap-y-6 md:flex-row justify-center items-center gap-x-10">
            <img src={AboutImg} alt="" className="w-[350px]" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-semibold pb-3">About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae illo, earum dolorem consectetur molestias
                cum quod mollitia facere quam libero, at voluptatum provident
                fuga sequi sapiente error laborum quae atque, voluptates quia
                placeat! Veritatis quidem corporis et facilis nulla ducimus
                fugit, rerum in voluptate reprehenderit quasi commodi sed dicta!
              </p>
            </div>
          </div>
          <div className="mt-16">
            <h1 className="text-2xl font-semibold mb-8">Our Developers</h1>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <div className="w-[250px] md:w-[300px] md:h-[230px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border p-10 rounded-xl flex flex-col items-center justify-center">
                <img src={avatar} alt="" className="w-24 rounded-full" />
                <p className="mt-2 text-xl font-semibold tracking-[0.3px]">
                  Nitya Dwivedi
                </p>
                <div className="flex gap-x-3 mt-2 text-xl">
                  <Link to="/">
                    <BsLinkedin className="text-blue-700" />
                  </Link>
                  <Link to="/">
                    <BsGithub />
                  </Link>
                </div>
              </div>
              <div className="w-[250px] md:w-[300px] md:h-[230px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border p-10 rounded-xl flex flex-col items-center justify-center">
                <img src={avatar} alt="" className="w-24 rounded-full" />
                <p className="mt-2 text-xl font-semibold tracking-[0.3px]">
                  Md Eraf
                </p>
                <div className="flex gap-x-3 mt-2 text-xl">
                  <Link to="/">
                    <BsLinkedin className="text-blue-700" />
                  </Link>
                  <Link to="/">
                    <BsGithub />
                  </Link>
                </div>
              </div>
              <div className="w-[250px] md:w-[300px] md:h-[230px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border p-10 rounded-xl flex flex-col items-center justify-center">
                <img src={avatar} alt="" className="w-24 rounded-full" />
                <p className="mt-2 text-xl font-semibold tracking-[0.3px]">
                  Ritik Kumar
                </p>
                <div className="flex gap-x-3 mt-2 text-xl">
                  <Link to="/">
                    <BsLinkedin className="text-blue-700" />
                  </Link>
                  <Link to="/">
                    <BsGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
