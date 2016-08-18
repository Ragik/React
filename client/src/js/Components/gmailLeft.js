var React=require("react");
var GmailLeft1=require("./GmailLeft1.js");
var GmailLeft = React.createClass({
 render: function() {

   var rows = [];

    this.props.data.forEach(function(data) {
    if(data.name==="INBOX"||data.name==='SENT'||data.name==='TRASH'||data.name==="IMPORTANT"||data.name==="DRAFT")
    {
      rows.push(<GmailLeft1 submitLabelId={this.props.submitLabelId} data={data} key={data.name} />);
    }
} .bind(this));
    return (<div className="container-fluid">
      <div className="col-md-12">
      <table>
        <tbody>
        <a href="#myModal" data-toggle="modal"  title="Compose" className="btn btn-compose">Compose</a>
        {rows}
        </tbody>
      </table>
      </div>
      </div>
    );
 }
});
module.exports=GmailLeft;
