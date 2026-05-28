import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiSass,
  SiJson,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVite,
  SiNextdotjs,
  SiRedux,
  SiGit,
  SiDocker,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiMarkdown,
} from "react-icons/si";

import {
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileArchive,
} from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/io";

const iconStyle = {
  fontSize: "18px",
};

export const fileIcons: Record<string, React.ReactNode> = {
  js: <SiJavascript style={{ ...iconStyle, color: "#F7DF1E" }} />,
  jsx: <SiReact style={{ ...iconStyle, color: "#61DAFB" }} />,
  ts: <SiTypescript style={{ ...iconStyle, color: "#3178C6" }} />,
  tsx: <SiReact style={{ ...iconStyle, color: "#61DAFB" }} />,
  html: <SiHtml5 style={{ ...iconStyle, color: "#E34F26" }} />,
  css: <IoLogoCss3 style={{ ...iconStyle, color: "#1572B6" }} />,
  scss: <BsFiletypeScss style={{ ...iconStyle, color: "#CC6699" }} />,
  sass: <SiSass style={{ ...iconStyle, color: "#CC6699" }} />,
  tailwind: <SiTailwindcss style={{ ...iconStyle, color: "#06B6D4" }} />,
  node: <SiNodedotjs style={{ ...iconStyle, color: "#339933" }} />,
  express: <SiExpress style={{ ...iconStyle, color: "#888888" }} />,
  mongodb: <SiMongodb style={{ ...iconStyle, color: "#47A248" }} />,
  prisma: <SiPrisma style={{ ...iconStyle, color: "#2D3748" }} />,
  mysql: <SiMysql style={{ ...iconStyle, color: "#4479A1" }} />,
  postgres: <SiPostgresql style={{ ...iconStyle, color: "#4169E1" }} />,
  next: <SiNextdotjs style={{ ...iconStyle, color: "#000000" }} />,
  vite: <SiVite style={{ ...iconStyle, color: "#646CFF" }} />,
  redux: <SiRedux style={{ ...iconStyle, color: "#764ABC" }} />,
  json: <SiJson style={{ ...iconStyle, color: "#F7DF1E" }} />,
  md: <SiMarkdown style={{ ...iconStyle, color: "#000000" }} />,
  gitignore: <SiGit style={{ ...iconStyle, color: "#F05032" }} />,
  dockerfile: <SiDocker style={{ ...iconStyle, color: "#2496ED" }} />,
  png: <FaFileImage style={{ ...iconStyle, color: "#38BDF8" }} />,
  jpg: <FaFileImage style={{ ...iconStyle, color: "#38BDF8" }} />,
  pdf: <FaFilePdf style={{ ...iconStyle, color: "#FF0000" }} />,
  docx: <FaFileWord style={{ ...iconStyle, color: "#2B579A" }} />,
  xlsx: <FaFileExcel style={{ ...iconStyle, color: "#217346" }} />,
  zip: <FaFileArchive style={{ ...iconStyle, color: "#F59E0B" }} />,
};
