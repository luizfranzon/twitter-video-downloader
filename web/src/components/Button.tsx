import { FileArrowDown } from "phosphor-react";
import { Oval } from "react-loader-spinner";

interface ButtonProps {
  isLoading: Boolean
  type: "button" | "submit" | "reset" | undefined
}

export function Button({ isLoading, type }: ButtonProps) {
  return (
    <button type={type} className="text-2xl flex items-center gap-1 bg-blueTwitter py-2 px-8 rounded mt-6 text-white font-bold hover:bg-[#0F85D4] transition-colors outline-none focus:outline-blueTwitter">
      {isLoading ? (
        <>
          <Oval
            height={25}
            width={90}
            color="#00548b"
            secondaryColor="#a2daff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </>
      ) : (
        <>
          Baixar <FileArrowDown size={28} color="#ffffff" weight="bold" />
        </>
      )}
    </button>
  );
}
