const Header = (props) => {
  return (
    <>
      <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-9">
                <div id="colorlib-logo">
                  <a href="index.html">Footwear</a>
                </div>
              </div>
              <div className="col-sm-5 col-md-3">
                <form action="#" className="search-wrap">
                  <div className="form-group">
                    <input
                      type="search"
                      className="form-control search"
                      placeholder="Search"
                    />
                    <button
                      className="btn btn-primary submit-search text-center"
                      type="submit"
                    >
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-left menu-1">
                <ul>
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="/product">Products</a>
                    {/* <ul className="dropdown">
                      <li>
                        <a href="product-detail.html">Men</a>
                      </li>
                     
                    </ul> */}
                  </li>
                 
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="cart">
                    <a href="cart.html">
                      <i className="icon-shopping-cart"></i> Cart [0]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sale">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center">
                <div className="row">
                  <div className="owl-carousel2">
                    <div className="item">
                      <div className="col">
                        <h3>
                          <a href="#">
                            25% off (Almost) Everything! Use Code: Summer Sale
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col">
                        <h3>
                          <a href="#">
                            Our biggest sale yet 50% off all summer shoes
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
