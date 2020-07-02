import React from 'react';
import Nav from '.././Navbar/navigator';
import Footer from '.././Footer/footer';


const Main = ({
    children
  }) => (
    <div>
      <Nav/>
      <div className="container-fluid">
        <div>{children}</div>
      </div>
      <Footer/>
    </div>
  );
  
  export default Main;