var React = require('react');
var ChildComponent = React.createClass({
  render: function(){
    return(
      <div>
      <nav className="navbar navbar-inverse sidebar" role="navigation">
<div className="container-fluid mynav">

<div className="navbar-header">
  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
  </button>

</div>
<div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
  <ul className="nav navbar-nav">

    <li className="active"><a href="#">Inbox<span className="pull-right hidden-xs showopacity glyphicon glyphicon-piggy-bank"></span></a></li>
    <li ><a href="#">Sent<span className="pull-right hidden-xs showopacity glyphicon glyphicon-send"></span></a></li>
    <li ><a href="#">Drafts<span className="pull-right hidden-xs showopacity glyphicon glyphicon-level-up"></span></a></li>
    <li ><a href="#">All<span className="pull-right hidden-xs showopacity glyphicon glyphicon-tree-conifer"></span></a></li>
    <li ><a href="#">Important<span className="pull-right hidden-xs showopacity glyphicon glyphicon-tag"></span></a></li>
    <li ><a href="#">Trash<span className="pull-right hidden-xs showopacity glyphicon glyphicon-trash"></span></a></li>
    <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Settings <span className="caret"></span><span className="pull-right hidden-xs showopacity glyphicon glyphicon-cog"></span></a>
      <ul className="dropdown-menu forAnimate" role="menu">
        <li><a href="#">Account</a></li>
        <li><a href="#">privacy</a></li>
        <li><a href="#">Something else here</a></li>
        <li className="divider"></li>
        <li><a href="#">Separated link</a></li>
        <li className="divider"></li>
        <li><a href="#">One more separated link</a></li>
      </ul>
    </li>
  </ul>
</div>
</div>

</nav>
</div>
  );
  }
})
module.exports = ChildComponent;
