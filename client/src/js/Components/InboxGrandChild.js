var React=require("react");
var inboxChild1 = React.createClass({
 render: function() {
return (
  <tr>
<td>{this.props.from1}</td>
<td><a>{this.props.subject}</a></td>
<td>{this.props.date}</td>
  </tr>
);
}
});


module.exports=inboxChild1;
