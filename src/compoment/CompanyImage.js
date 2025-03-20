export default function CompanyImage({ src }) {
    return (
      <div className="company-image rounded w-full max-w-[400px] h-[200px] overflow-hidden ">
        <img
          src={src}
          className="w-full h-full rounded object-cover transition-all duration-300 ease-in-out hover:scale-125 hover:rounded cursor-pointer"
        />
      </div>
    );
  }
  