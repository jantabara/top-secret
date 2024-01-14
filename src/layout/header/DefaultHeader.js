import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";

const DefaultHeader = ({ singleMenu, dark }) => {
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer pl-2">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logos/logo-white.png"
                          : "assets/images/logos/edc_black.svg"
                      }
                      alt="Logo"
                      title="Logo"
                      style={{
                        width: 100
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <NavSearch /> */}
            {/* Menu Button */}
            <div className="menu-btns">
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button>
                  <img src="assets/images/icons/toggler-white.svg" alt="Toggler" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
