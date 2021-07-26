import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';
import Customer from '../pages/Customer';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/produtos" component={Product} />
        <Route path="/clientes" component={Customer} />
    </Switch>
);

export default Routes;
