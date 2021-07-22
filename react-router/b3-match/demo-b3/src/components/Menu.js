import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true,
    },
    {
        name: "Giới thiệu",
        to: "/about",
        exact: false,
    },
    {
        name: "Liên kết",
        to: "/contact",
        exact: false,
    },
    {
        name: "Sản phẩm",
        to: "/products",
        exact: false,
    },
];

// custom Link
// MenuLink là 1 func, nhận vào 1 obj các arrtribute cần thiết
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    /*
        label: nội dung trong tag
        to: đg path
        activeOnlyWhenExact: check exact
    */

    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? "activeSelect" : "";
                return (
                    <li className={`nav-item`}>
                        <Link className={`nav-link ${active}`} to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
            /*
            children: trong là 1 arrow func (tham số là 1 obj {match} khi nào url trùng thì sẽ add phần custom, kiểm tra path)
            return về chính là phần muốn custom (phần muốn tag MenuLink hiển thị)  
        */
        />
    );
};

function Menu() {

    // cấu hình menu
    const showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }

        return result;
    };

    return (
        <div className="Menu">
            {/* Menu */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            {/* <MenuLink
                                label="Trang chủ"
                                to="/"
                                activeOnlyWhenExact={true}
                            />
                            <MenuLink
                                label="Giới thiệu"
                                to="/about"
                                activeOnlyWhenExact={false}
                            />
                            <MenuLink
                                label="Liên kết"
                                to="/contact"
                                activeOnlyWhenExact={false}
                            /> */}
                            {showMenu(menus)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
