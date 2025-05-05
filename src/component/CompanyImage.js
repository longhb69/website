export default function CompanyImage({ src }) {
    return (
      <div className="company-image rounded w-full h-full overflow-hidden "
      >
        <img
          src={src}
          className="w-full h-full rounded object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:rounded cursor-pointer"
        />
      </div>
    );
  }
  