import Image from "next/image";
import 'https://cdn.tailwindcss.com'

export default function Home() {
  return (
    <div className="bg-black flex min-h-screen">
        <div className="bg-red-300 grow-[1] p-5 flex flex-col gap-2">
        <div id="text-block" className="bg-black text-white text-center py-2 codeblock" draggable="true">text</div>
        <div id="img-block" className="bg-green-300 text-black text-center py-2 codeblock" draggable="true">image</div>
    </div>
    <div className="bg-blue-300 grow-[2] p-5 flex flex-col gap-2"></div>
    </div>  
  );
}
