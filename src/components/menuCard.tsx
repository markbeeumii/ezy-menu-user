
type MenuCardProps={
  image ? : string;
  code ? : string;
  title_kh ? : string;
  title_en ? : string;
  title_ch ? : string;
  price ? : number | any
}

export const MenuCard = ({ price,image,code,title_ch,title_en,title_kh }: MenuCardProps) => {
  
  const sumprice= price? parseFloat(price).toFixed(2) : price
  return (
    <>
        <div className="card card-custom rounded-3 px-0 shadow-sm">
          {/* <div className="px-3 object-fit-cover py-1"> </div> */}
          <img
            src={image}
            className="card-img-top img-card object-fit-cover"
            height={200}
            alt="My Image"
          />
          <div className="card-body px-2 pb-0 mb-0 mt-0">
            <div className="d-flex justify-content-between px-1 m-0">
              <button className="btn-menu">{code}</button>
              <button className="btn-menu">${sumprice}</button>
            </div>
            <div className="mt-3 mb-0">
              <h5 className="text-kh">{title_kh}</h5>
              <h5 className="text-en">{title_en}</h5>
            </div>
          </div>
        </div>
    </>
  );
};
