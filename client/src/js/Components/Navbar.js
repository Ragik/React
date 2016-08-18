var React = require('react');

var Navbar = React.createClass({
render: function(){
  return(
    <div className="container-fluid">
      <div className="row" id="row1">
        <div className="col-md-3">
        <a className="navbar-brand" href="/"><img src="./images/gmail.jpg" alt="Gmail"/></a>
        </div>
        <div className="col-md-6">
        <form className="navbar-form">
        <div id="searchId">
              <input className="form-control" type="text"/>
              <button type="submit" className="btn btn-default pull-left" id="glyphSearch" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-search"></span></button>
              </div>
            </form>
        </div>
        <div className="col-md-3">
        <div id="userDrop">
        <ul className="nav navbar">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user"></span>Ragi.K<span className="caret"></span></a>
          <ul className="dropdown-menu">
          <li>
            <a href="#"><span className="glyphicon glyphicon-wrench"></span>Settings</a>
          </li>
          <li>
            <a href="#"><span className="glyphicon glyphicon-refresh"></span>Update Profile</a>
          </li>
          <li>
            <a href="#"><span className="glyphicon glyphicon-off"></span>Sign Out</a>
          </li>
          </ul>
        </li>
      </ul>
      </div>
        </div>
      </div>
  </div>
);
}
});
// render(<MainComponent/>,document.getElementById('app'));
module.exports = Navbar;
