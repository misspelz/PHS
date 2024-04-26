import plumbingimgmobile from "@/assets/plumbingimgmobile.svg";
import paintingimgmobile from "@/assets/paintingsmallscreen.svg";
import GHM from "@/assets/GHM.svg";
import GHMmob from "@/assets/service7.png";
import drywall from "@/assets/drywall.svg";
import drywallmob from "@/assets/service1.png";
import tiling from "@/assets/tiling.svg";
import tilingmob from "@/assets/service4.png";
import capentry from "@/assets/capentry.svg";
import capentrymob from "@/assets/service2.png";
import tvmounting from "@/assets/tvmounting.svg";
import tvmountingmob from "@/assets/service3.png";
import paintingwebimg from "@/assets/paintingwebimg.svg";
import plumbingwebimg from "@/assets/plumbingwebimg.svg";
import plumbingmobile from "@/assets/plumbingmobile.svg";
import bgPlumbing from "@/assets/plumbing.svg";
import bgPainting from "@/assets/bgpainting.svg";
import bgTV from "@/assets/bgtv.svg";
import bgCapentry from "@/assets/bgcapentry.svg";
import bgTilling from "@/assets/bgtiling.svg";
import bgDrywall from "@/assets/bgdrywall.svg";
import bgGHM from "@/assets/bggeneralhm.svg";
import arrow from "@/assets/servicearrow.svg";

// interface ServiceData {
//   id: number;
//   title: string;
//   description: string;
//   imageSrc: string;
//   webimage: string;
//   btn: string;
// }

export const servicesdata = [
  {
    id: 1,
    title: "Plumbing",
    description: "We have only the best, qualified and certified plumbers.",
    imageSrc: plumbingimgmobile,
    webimage: plumbingwebimg,
    bg: bgPlumbing,
    bgmobile: plumbingmobile,
    btn: "Learn more",
    // arrow: arrow,
  },
  {
    id: 2,
    title: "Painting",
    description:
      "Our painters mix their awesome skills to make really great paintings.",
    imageSrc: paintingimgmobile,
    webimage: paintingwebimg,
    bg: bgPainting,
    btn: "Learn more",
    // arrow: arrow,
  },
  {
    id: 3,
    title: "TV Mounting",
    description: "Seamless TV Mounting: Perfect Placement, Every Time.",
    imageSrc: tvmountingmob,
    webimage: tvmounting,
    bg: bgTV,
    btn: "Learn more",
    // arrow: arrow,
  },
  {
    id: 4,
    title: "Carpentry",
    description:
      "We've gathered a team of the best carpenters for top-notch work and quality.",
    imageSrc: capentrymob,
    webimage: capentry,
    bg: bgCapentry,
    btn: "Learn more",
    // arrow: arrow,
  },

  {
    id: 5,
    title: "Tiling",
    description:
      "Our expert tilers guarantee flawless results, transforming your space with quality.",
    imageSrc: tilingmob,
    webimage: tiling,
    bg: bgTilling,
    btn: "Learn more",
    // arrow: arrow,
  },
  {
    id: 6,
    title: "Drywall Repairs",
    description:
      "We ensure seamless drywall repairs, restoring your walls with expertise.",
    imageSrc: drywallmob,
    webimage: drywall,
    bg: bgDrywall,
    btn: "Learn more",
    // arrow: arrow,
  },
  {
    id: 7,
    title: "General Household Maintenance",
    description:
      "We handle all your house maintenance needs with care and ensure your home stays in safe.",
    imageSrc: GHMmob,
    webimage: GHM,
    bg: bgGHM,
    btn: "Learn more",
    // arrow: arrow,
  },
];
