import Image from "next/image";
import Information from "./components/Information";

export default function Home() {
  return (
    <main className="h-screen w-screen box-border">
      <div className="w-11/12 mx-auto flex mt-10 gap-5 mb-10">
        <div className="w-[20%] h-[550px] bg-white rounded-lg">
           <Information/>
        </div>
        <div className="w-[70%] h-[600px] bg-white rounded-lg">

        </div>
        <div className="w-[10%] h-[500px] bg-white rounded-lg">
          <div>

          </div>
        </div>
      </div>    
    </main>
  );
}
