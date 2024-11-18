function ProductItem() {
  return (
    <div className="px-48 pb-5">
      <div className="border-gray grid h-32 grid-cols-[3fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] items-center rounded-xl border shadow-lg">
        <div>IMG</div>
        <div className="font-bold">Product name</div>
        <div className="font-thin">description</div>
        <div className="font-bold">Price</div>
        <div className="font-thin">Amount</div>
        <div></div>
        <div></div>
        <div className="font-thin">catagorized</div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductItem;
