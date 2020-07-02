import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './common/Home/home';
import Men from './user/Mens/mens';
import Women from './user/Womens/womens';
import Kid from './user/Kids/kids';



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
            <Route path='/Mens' component={Men}/>
            <Route path='/Womens' component={Women}/>
            <Route path='/Kids' component={Kid}/>
            <Route exactpath='/' component={Home}/>
        {/* <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
