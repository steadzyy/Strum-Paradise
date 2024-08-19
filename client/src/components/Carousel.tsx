const Carousel = () => {
  return (
    <>
      <div className="carousel w-full h-64">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.sweelee.co.id/cdn/shop/files/SLID_Fender_Player_II_Long-Banner-Slideshow_Desktop_1350_405_1x_2700_810_2x_c9314b10-a2ff-483b-ba3b-38d38dde650e_2220x666_crop_top.jpg?v=1722234953"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a className="btn btn-circle">❮</a>
            <a className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.sweelee.co.id/cdn/shop/files/1_SL_Fender_70th_Anniv_Header_Canvas_2x_1080x360px.jpg?crop=left&height=360&v=1719803316"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a className="btn btn-circle">❮</a>
            <a className="btn btn-circle">❯</a>
          </div>
        </div>
        <div className="carousel-item relative w-full">
          <img
            src="https://www.sweelee.co.id/cdn/shop/files/Guitars_Basses_Collection_Page_Header_Canvas_2x_1080x360px.jpg?crop=left&height=360&v=1709118979"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a className="btn btn-circle">❮</a>
            <a className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://www.sweelee.co.id/cdn/shop/files/1_SLID_Fender_70th_Anniv_Non-Full-Width-Slideshow_Desktop_1110X333_1x_2220x666_2x_2994b947-9d50-4e41-bbb6-208d6dd2ad25_1110x333_crop_top.jpg?v=1719803676"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a className="btn btn-circle">❮</a>
            <a className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
