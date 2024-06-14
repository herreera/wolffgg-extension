import React from "react";
import Image from "next/image";
import { montserrat } from "@/config/font";

export default function Home() {
  return (
    <main className={`${montserrat.className} flex flex-col w-[1728px] h-[1117px] xl:flex xl:w-full`}>
      <div className="flex flex-row items-center w-full h-[8%] bg-[#090B13]">
        <div className="flex flex-row w-[30%] h-full pl-[34px] pt-[20px]">
          <div className="w-[50px] h-[50px] mr-5">
            <Image
              src="/Logo-Wolfgg.png" 
              alt="Logo WolfGG"
              width={50}
              height={50}
            />
          </div>
          <div className="font-bold pt-[17px] text-xl">
            <span>WOLFGG</span>
          </div>
        </div>
        <div className="flex flex-row items-center w-44 h-[79px] bg-red ml-auto mr-[25px]">
          <div className="flex items-center justify-center pl-[10.5px] w-[50px] h-[50px]">
            <Image
              src="/Moneda-GG-2.png"
              alt="Moneda"
              width={35}
              height={35}
            />
          </div>
          <div className="flex justify-center items-center ml-6 w-5 h-5">
            <Image
              src="/Vector.png"
              alt="Mector"
              width={16}
              height={14}
            />
          </div>
          <div className="flex justify-center items-center ml-4 w-12 h-12">
          <Image
              src="/img-perfil.png"
              alt="perfil"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
