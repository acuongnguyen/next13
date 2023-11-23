'use client'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Link from 'next/link';

// const AppHeader = () => {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand >
//                     <Link href={"/"} className="navbar-brand">
//                         Next
//                     </Link>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Link href={"/"} className='nav-link'>Home</Link>
//                         <Link href={"/blog"} className='nav-link'>Blog</Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default AppHeader;
import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header style={{ maxHeight: '10vh' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Link href={"/"} className="navbar-brand">MYS</Link>

                <Menu.Item key="2">Sản phẩm</Menu.Item>
                <Menu.Item key="3">Giới thiệu</Menu.Item>
                {/* Thêm các Menu.Item khác nếu cần */}
            </Menu>
        </Header>
    );
};

export default AppHeader;
