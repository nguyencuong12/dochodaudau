"use client";
import { Typography } from "@material-tailwind/react";
import CarouselComponent from "./components/carousel/carousel";
import SectionComponent from "./components/section";
import "./styles/homePage.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <CarouselComponent></CarouselComponent>
      <SectionComponent>
        <Typography className="text-center">Art Puzzle - Be artist</Typography>
        <Typography variant="h3" className="text-center font-extrabold title">
          Material Tailwind
        </Typography>
        <div className="container mx-auto border-2 border-rose">
          <div>HELLO WORLD</div>
        </div>
      </SectionComponent>
    </div>
  );
}
