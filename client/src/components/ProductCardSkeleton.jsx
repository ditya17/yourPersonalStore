import { BiImageAlt } from "react-icons/bi";

const ProductCardSkeleton = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} animate-pulse`}
    >
      {/* image */}
      <div className="w-full flex justify-center items-center object-fill object-center h-60 px-8 pt-3 aspect-video bg-slate-300">
        <BiImageAlt className="text-4xl text-slate-400" />
      </div>
      <div className="p-3 border-l-[5px] border-slate-300">
        <div className="w-[55%] h-3 rounded-sm bg-slate-300 mt-2" />
        <div className="w-[80%] h-3 rounded-sm bg-slate-300 mt-3" />
        <div className="flex justify-between items-center mt-5">
          <div className="h-2 rounded-sm bg-slate-300 w-[20%]" />
          <div className="h-2 rounded-sm bg-slate-300 w-[30%]" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
