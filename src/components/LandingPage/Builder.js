import React, { useState } from 'react'
import Sidedrawer from "../Sidedrawer/Sidedrawer"
import Toolbar from "../Toolbar/Toolbar"
import PrivateRoutes from '../PrivateRoute/PrivateRoutes';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Builder = (props) => {
  const [showSidedrawer, setSidedrawer] = useState(false);

  const setSidedrawerhandler = () => {
    setSidedrawer(false);
  };
  const setRemover = () => {
    setSidedrawer(true);
  };
  return (
    <div>
      <Toolbar
        navState={showSidedrawer}
        closed={setSidedrawerhandler}
        open={showSidedrawer}
        click={setRemover}
      />
      <Sidedrawer
        open={showSidedrawer}
        navState={showSidedrawer}
        click={setRemover}
        closed={setSidedrawerhandler}
      />

        <PrivateRoutes />
    </div>
  );
}

export default Builder;



