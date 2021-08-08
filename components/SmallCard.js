import Image from "next/image";
function SmallCard({ img, distance, location }) {
  return (
    <div className="flex m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-150 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-medium">{location}</h2>
        <h3 className="font-medium">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
