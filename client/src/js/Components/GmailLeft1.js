var React=require("react");

var GmailLeft1= React.createClass({
  handleLabelId: function()
  {
  //  console.log(this.props.data.id);
    this.props.submitLabelId({lableId:this.props.data.id});
  },
  render: function() {
    return (

      <td id="btnpad"><a onClick={this.handleLabelId} className="btn btn-primary">{this.props.data.name}</a></td>
    );
  }
});
module.exports=GmailLeft1;
