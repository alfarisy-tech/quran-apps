export default function Banner() {
    return (
        <>
            <div className="carousel rounded-lg mt-5 w-full">
                <div id="slide1" style={ { height: '30vh' } } className="carousel-item relative w-full">
                    <img src="https://convera.com/wp-content/uploads/2023/02/Convera_Website-Hero-Services-Offer-FX-Payments-1920x430-1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" style={ { height: '30vh' } } className="carousel-item relative w-full">
                    <img src="https://oakvillenews.org/downloads/14298/download/Pride%20in%20Nature.png?cb=9c5027b5f7191b7ab21bd3dae635026f&w=1920" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    )
}