import ItemCard from "../Components/common/ItemCard";
import PrimaryButton from "../Components/common/primaryButton";
import Layout from "../Components/Layout";
import img1 from "../public/images/img_bg_1.jpg";
import { useApiRequest } from "../utility";
export default function Home(props) {
  const {data, isLoaded, error} = useApiRequest("https://fakestoreapi.com/products?limit=8")
  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded || data.length < 1) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      {/* <aside id="colorlib-hero">
			<div className="flexslider">
				<ul className="slides">
			   	<li style={{backgroundImage: "url(images/img_bg_1.jpg)"}}>
			   		<div className="overlay"></div>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div className="slider-text-inner">
				   					<div className="desc">
					   					<h1 className="head-1">Men's</h1>
					   					<h2 className="head-2">Shoes</h2>
					   					<h2 className="head-3">Collection</h2>
					   					<p className="category"><span>New trending shoes</span></p>
					   					<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style={{backgroundImage: "url(images/img_bg_2.jpg)"}}>
			   		<div className="overlay"></div>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div className="slider-text-inner">
				   					<div className="desc">
					   					<h1 className="head-1">Huge</h1>
					   					<h2 className="head-2">Sale</h2>
					   					<h2 className="head-3"><strong className="font-weight-bold">50%</strong> Off</h2>
					   					<p className="category"><span>Big sale sandals</span></p>
					   					<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style={{backgroundImage: "url(images/img_bg_3.jpg)"}}>
			   		<div className="overlay"></div>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div className="slider-text-inner">
				   					<div className="desc">
					   					<h1 className="head-1">New</h1>
					   					<h2 className="head-2">Arrival</h2>
					   					<h2 className="head-3">up to <strong className="font-weight-bold">30%</strong> off</h2>
					   					<p className="category"><span>New stylish shoes for men</span></p>
					   					<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			  	</ul>
		  	</div>
		</aside> */}
      <div className="colorlib-intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="intro">
                It started with a simple idea: Create quality, well-designed
                products that I wanted myself.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href="#"
                  className="featured-img"
                  style={{ backgroundImage: "url(images/men.jpg)" }}
                ></a>
                <div className="desc">
                  <h2>
                    <a href="#">Shop Men's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href="#"
                  className="featured-img"
                  style={{ backgroundImage: "url(images/women.jpg)" }}
                ></a>
                <div className="desc">
                  <h2>
                    <a href="#">Shop Women's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
          </div>
          <div className="row row-pb-md">
            {data.map((product) => {
              return (
                <div className="col-lg-3 mb-4 text-center">
                  <ItemCard
                    src={product.image}
                    alt="Free html5 bootstrap 4 template"
                    name={product.title}
                    price="$139.00"
                    url={`/product/${product.id}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <PrimaryButton title="Shop All Products" url="/product"  />
            </div>
          </div>
        </div>
      </div>

      <div className="colorlib-partner">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>Trusted Partners</h2>
            </div>
          </div>
          <div className="row">
            <div className="col partner-col text-center">
              <img
                src="images/brand-1.jpg"
                className="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div className="col partner-col text-center">
              <img
                src="images/brand-2.jpg"
                className="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div className="col partner-col text-center">
              <img
                src="images/brand-3.jpg"
                className="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div className="col partner-col text-center">
              <img
                src="images/brand-4.jpg"
                className="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div className="col partner-col text-center">
              <img
                src="images/brand-5.jpg"
                className="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
