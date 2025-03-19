export default function CompanyImage({ src }) {
    return (
      <div className="company-image w-full max-w-[400px] h-[200px] overflow-hidden ">
        <img
          src={src}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer"
        />
      </div>
    );
  }
  