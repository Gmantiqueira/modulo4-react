import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
    <Container>
        <Search>
            <input placeholder="Search" />
        </Search>

        <User>
            <img
                src="https://media.licdn.com/dms/image/C4D03AQEIwU9aPrw29g/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=cJ66to3p7ewhwV_KN-B_GE9k2V--rvuOsqP0S1y4OTs"
                alt="avatar"
            />
            Gabriel Antiqueira
        </User>
    </Container>
);

export default Header;
