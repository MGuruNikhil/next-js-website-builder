import Image from "next/image";

export default function Home() {
  return (
    <div class="bg-black flex min-h-screen">
        <div class="bg-red-300 grow-[1] p-5 flex flex-col gap-2">
        <div id="text-block" class="bg-black text-white text-center py-2 codeblock" draggable="true">text</div>
        <div id="img-block" class="bg-green-300 text-black text-center py-2 codeblock" draggable="true">image</div>
    </div>
    <div class="bg-blue-300 grow-[2] p-5 flex flex-col gap-2"></div>
    </div>  
  );
}
