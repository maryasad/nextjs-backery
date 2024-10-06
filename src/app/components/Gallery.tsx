import Image from "next/image";

const Gallery = () => (
  <section className="py-8 px-4 bg-bakery bg-gray-50">
    {/* //   <section className="py-8 px-4 bg-bakery bg-opacity-70"> */}
    {/* <section className="py-8 px-4 bg-bakery bg-opacity-70 h-screen"> */}
    <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">
      We serve delicious pastries, cakes, and a variety of traditional Persian
      Nan.
    </h2>
    <div className="grid grid-cols-6 gap-4">
      {" "}
      {/* Change this value to match the number of images */}
      <Image
        src="/images/IMAGE4.jpg"
        alt="Bread 1"
        width={300}
        height={200}
        className="rounded shadow-md"
      />
      <Image
        src="/images/IMAGE5.jpg"
        alt="Bread 2"
        width={300}
        height={200}
        className="rounded shadow-md"
      />
      <Image
        src="/images/IMAGE6.jpg"
        alt="Bread 3"
        width={300}
        height={200}
        className="rounded shadow-md"
      />
      <Image
        src="/images/IMAGE7.jpg"
        alt="Bread 4"
        width={300}
        height={200}
        className="rounded shadow-md"
      />
      <Image
        src="/images/IMAGE8.jpg"
        alt="Bread 5"
        width={300}
        height={200}
        className="rounded shadow-md"
      />
      <Image
        src="/images/IMAGE9.jpg"
        alt="Bread 6"
        width={300}
        height={200}
        className="rounded shadow-md"
      />
    </div>
  </section>
);

export default Gallery;
