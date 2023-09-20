import { Route, Routes as  Ways} from 'react-router-dom';

import {Home} from './pages/Home';
import {Cart} from './pages/Cart';
import {Purchase} from './pages/Purchase';

function Routes() {
  return (
    <Ways>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/purchase" element={<Purchase />} />
    </Ways>
  );
}

export default Routes;