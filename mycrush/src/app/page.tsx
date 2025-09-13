"use client";

import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoveGift() {
  const [showHeart, setShowHeart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHeart(true), 5000); // арай хурдан болгов
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden px-4">
      {/* Цас */}
      <Snowfall snowflakeCount={50} />

      {/* Зүрх */}
      {showHeart && !showMessage && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-red-500 text-7xl sm:text-9xl cursor-pointer"
          onClick={() => setShowMessage(true)}
        >
          ❤️
        </motion.div>
      )}

      {/* Message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white max-w-lg w-full overflow-y-auto p-4"
        >
          {/* Зураг */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/IMG_7326.jpeg"
              alt="Our Memory"
              width={350}
              height={350}
              className="rounded-xl shadow-lg w-48 h-48 sm:w-72 sm:h-72 object-cover"
            />
          </div>

          {/* Текст */}
          <h1 className="text-2xl sm:text-3xl mb-3">Миний чамд хэлэх үг...</h1>
          <p className="mb-6 text-base sm:text-lg leading-relaxed text-justify">
            Өнөөдөр би чамайг хараагүй. Гэхдээ зөвхөн <b>хоолойг чинь</b> сонссон нь надад хангалттай байлаа. 
            Тэр хоолой яг л намайг маш чухал зүйл рүү татаж буй мэт мэдрэмж төрүүлсэн.
            <br /><br />
            Mobile Legends тоглож, дэлгэцэнд анхаарлаа төвлөрүүлж байх зуураа чамтай тааралдсан тэр мөч миний зүрхэнд гүн үлдсэн. 
            Тоглоомын дуу чимээ, чиний хоолойн аялга хоёр нийлээд миний зүрхэнд догдлол төрүүлж, өнөөдрийн өдрийг мартагдашгүй болгосон.
            <br /><br />
            Хэдий богинохон харилцаа байсан ч миний хувьд гэрэл мэт гялалзаж үлдсэн. 
            Хэрэв би чамайг бодитоор харж чадсан бол хамгийн энгийнээр чиний инээмсэглэлийг мэдэрч, жинхэнэ зан аашийг чинь ойлгож болох байсан байх.
            <br /><br />
            Гэхдээ өнөөдрийн зөвхөн хоолой, зөвхөн тэр мөч л миний дотоод ертөнцийг хөдөлгөж, миний өдөрт гэрэл нэмсэн. 
            Энэ жижигхэн догдлол надад үнэ цэнтэй, дахин давтагдашгүй мэдрэмжийг бэлэглэсэн.
            <br /><br />
            Тиймээс өнөөдрийн дурсамж, чиний хоолой, тоглоомын мөчтэй холбогдсон энэ догдлол
            миний зүрхэнд үргэлж тодхон үлдэнэ. 💌
          </p>

          {/* Дууны линкүүд */}
          <div className="space-y-3">
            <a
              href="https://www.youtube.com/watch?v=dTS_aNfpbIM&list=RDdTS_aNfpbIM&start_radio=1"
              target="_blank"
              className="block underline text-blue-400 text-sm sm:text-base"
            >
              🎶 Malcolm Todd – Chest pain
            </a>
            <a
              href="https://www.youtube.com/watch?v=RgKAFK5djSk"
              target="_blank"
              className="block underline text-blue-400 text-sm sm:text-base"
            >
              🎶 Wiz Khalifa – See You Again
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
