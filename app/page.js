import Toolbar from './toolbar'

export default function Home() {
  return (
    <div className="bg-black flex min-h-screen">
    <Toolbar/>
    <div className="bg-blue-300 grow-[2] p-5 flex flex-col gap-2"></div>
    </div>  
  );
}
