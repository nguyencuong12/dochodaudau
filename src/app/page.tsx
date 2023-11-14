"use client";
import CarouselComponent from "./components/carousel/carousel";
import "./styles/homePage.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <CarouselComponent></CarouselComponent>
    </div>
  );
}
