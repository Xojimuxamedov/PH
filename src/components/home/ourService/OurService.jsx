import React from "react";
import "./OurService.scss";

const serviceData = [
  { id: 1, icon: "", color: "#6BA2F3", title: "Dori va BFQlar uchun xalqaro standart asosida bino loyihalash.", link: "#" },
  { id: 2, icon: "", color: "#67B3F1", title: "Murakkab mahsulot texnologiyasini mahalliy ishlab chiqarishga joriy etish.", link: "#" },
  { id: 3, icon: "", color: "#E0A976", title: "Sifatli xomashyo va materiallar yetkazib berish.", link: "#" },
  { id: 4, icon: "", color: "#8297CC", title: "Yangi mahsulotlarni seriyali ishlab chiqarishni yo‘lga qo‘yish.", link: "#" },
  { id: 5, icon: "", color: "#80CB6D", title: "Korxonalarga texnik ta’minot ko‘rsatish.", link: "#" },
  { id: 6, icon: "", color: "#E58E8E", title: "Ishlab chiqarish va realizatsiya uchun hujjatlarni tayyorlash.", link: "#" },
  { id: 7, icon: "", color: "#B37DCD", title: "Dori va tibbiy buyumlarni davlat ro‘yxatidan o‘tkazish.", link: "#" },
  { id: 8, icon: "", color: "#E58E8E", title: "GxP standartlarini joriy etish.", link: "#" },
  { id: 9, icon: "", color: "#68CFBD", title: "Malaka oshirish kurslari va amaliy yordam.", link: "#" },
  { id: 10, icon: "", color: "#C2C975", title: "Xorijiy korxonalarda audit va inspeksiyaga tayyorlash.", link: "#" },
  { id: 11, icon: "", color: "#3bccc0", title: "Dezinfeksiya vositalari va anjomlarni yetkazib berish.", link: "#" },
]

const OurService = () => {
  return (
    <section className="service">
      <div className="service-inner">
        <h3 className="service-title">Bizning xizmatlar</h3>
        <div className="service-links">
          {serviceData.map((service) => (
            <a key={service.id} href={service.link} style={{backgroundColor: service.color}} className={"service-link div" + service.id}>
              {service.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
