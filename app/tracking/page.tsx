import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});


export default function TrackingPage(){
    return(
        <div className="w-full max-w-7xl mx-auto p-5 mt-32">
            <h1 className="text-32px font-black mt-16">
                EN CONSTRUCCIÓN ... 
            </h1>
        </div>
    )
}