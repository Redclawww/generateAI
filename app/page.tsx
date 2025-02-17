import Image from "next/image";
import AIStoryGenerator from "./AiStory";

export default function Home() {
  return (
    <div className="h-full ">
      <AIStoryGenerator />
    </div>
  );
}
