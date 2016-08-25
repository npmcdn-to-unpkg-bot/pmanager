var ProjectBox = React.createClass({
  render: function() {
    return (
      <div className="projectBox">
        Hello, world! I am a ProjectBox.
      </div>
    );
  }
});
ReactDOM.render(
  <ProjectBox />,
  document.getElementById('reactContent')
);
