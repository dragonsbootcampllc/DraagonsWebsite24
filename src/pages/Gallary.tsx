import Gallary from "../components/Gallary/Gallary.jsx";

const images = [
  { src: "/images/Gallery/1.png", alt: "Season 1" },
  { src: "/images/Gallery/2.png", alt: "Season 2" },
  { src: "/images/Gallery/3.png", alt: "Season 2" },
  { src: "/images/Gallery/4.png", alt: "Season 2" },
  { src: "/images/Gallery/5.png", alt: "Season 2" },
  { src: "/images/Gallery/6.png", alt: "Season 2" },
  { src: "/images/Gallery/7.png", alt: "Season 2" },
  { src: "/images/Gallery/8.png", alt: "Season 2" },
  { src: "/images/Gallery/9.png", alt: "Season 2" },
  { src: "/images/Gallery/10.png", alt: "Season 2" },
  { src: "/images/Gallery/11.png", alt: "Season 2" },
  { src: "/images/Gallery/12.png", alt: "Season 2" },
  { src: "/images/Gallery/13.png", alt: "Season 2" },
  { src: "/images/Gallery/14.png", alt: "Season 2" },
  { src: "/images/Gallery/15.png", alt: "Season 2" },
  { src: "/images/Gallery/16.png", alt: "Season 2" },
  { src: "/images/Gallery/17.png", alt: "Season 2" },
  { src: "/images/Gallery/18.png", alt: "Season 2" },
  { src: "/images/Gallery/19.png", alt: "Season 2" },
  { src: "/images/Gallery/20.png", alt: "Season 2" },
  { src: "/images/Gallery/21.png", alt: "Season 2" },
  { src: "/images/Gallery/22.png", alt: "Season 2" },
  { src: "/images/Gallery/23.png", alt: "Season 2" },
  { src: "/images/Gallery/24.png", alt: "Season 2" },
  { src: "/images/Gallery/25.png", alt: "Season 2" },
  { src: "/images/Gallery/26.png", alt: "Season 2" },
  { src: "/images/Gallery/27.png", alt: "Season 2" },
];

export default function GallaryPage() {
  return (
    <div>
      <Gallary images={images} />
    </div>
  );
}
