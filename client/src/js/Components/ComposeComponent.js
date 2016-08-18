var React = require('react');
var ComposeModal = React.createClass({
  getInitialState: function()
  {
    return({msgTo:'', msgSubject:'', msgData:''});
  },
  sendMessage: function()
  {
    var accessToken = localStorage.getItem('gToken');
    var email = '';
    var Headers = {'To': this.state.msgTo,'Subject': this.state.msgSubject};
    for(var header in Headers)
    {
      email += header += ": "+Headers[header]+"\r\n";
    }
    email += "\r\n" + this.state.msgData;
    console.log(email);
    var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
    console.log(encodedMessage);
    alert(encodedMessage);
    $.ajax({
      url: ' https://www.googleapis.com/gmail/v1/users/ragiknair05%40gmail.com/messages/send?key={AIzaSyApZnixq68ru01UHi_tQKUjIUo9-edS8LU}',
      dataType: 'json',
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify({'raw': encodedMessage}),
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        console.log("Success");
      }.bind(this),
      async: false,
      error: function(xhr, status, err) {
        console.error("Error.."+err.toString());
      }.bind(this)
    });
  },
  handleToState: function(e)
  {
    this.setState({msgTo:e.target.value});
  },
  handleMessageState: function(e)
  {
    this.setState({msgData:e.target.value});
  },
  handleSubjectState: function(e)
  {
    this.setState({msgSubject:e.target.value});
  },
  render: function()
  {
    return(
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal" className="modal fade" >
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
      <button aria-hidden="true" data-dismiss="modal" className="close" type="button">x</button>
      <h4 className="modal-title">Compose</h4>
      </div>
      <div className="modal-body">
      <form role="form" className="form-horizontal">
      <div className="form-group">
      <label className="col-lg-2 control-label">To</label>
      <div className="col-lg-10">
      <input type="text" placeholder="" onChange={this.handleToState} id="email" className="form-control" required/>
      </div>
      </div>
      <div className="form-group hidden">
      <label className="col-lg-2 control-label">Cc / Bcc</label>
      <div className="col-lg-10">
      <input type="text" placeholder="" id="cc" className="form-control"/>
      </div>
      </div>
      <div className="form-group">
      <label className="col-lg-2 control-label">Subject</label>
      <div className="col-lg-10">
      <input type="text" onChange={this.handleSubjectState} placeholder="" id="msgsub" className="form-control" required/>
      </div>
      </div>
      <div className="form-group">
      <label className="col-lg-2 control-label">Message</label>
      <div className="col-lg-10">
      <textarea rows="10" cols="30" onChange={this.handleMessageState} className="form-control" id="msg" name="" required></textarea>
      </div>
      </div>
      </form>
      </div>
      <div className="modal-footer">
      <div className="col-lg-offset-2 col-lg-10">
      <span className="btn green fileinput-button hidden">
      <i className="fa fa-plus fa fa-white"></i>
      <span>Attachment</span>
      <input type="file" name="files[]" multiple=""/>
      </span>
      <button className="btn btn-primary" onClick={this.sendMessage} type="submit" data-dismiss="modal">Send</button>
      <button className="btn btn-default" type="button" data-dismiss="modal">Close</button>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }});
  module.exports= ComposeModal;
