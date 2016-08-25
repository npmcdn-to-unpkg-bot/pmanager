var data = [
  {id: 1, name: "NOVA Open", desc: "Paint queue for NOVA"},
  {id: 2, name: "30k Escalation", desc: "Paint queue for 30k Raven Guard"}
];

var Project = React.createClass({
  render: function() {
    return (
      <div className="project">
        <h2 className="projectName">
          {this.props.name}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var ProjectList = React.createClass({
  render: function() {
    var projectNodes = this.props.data.map(function(project) {
      return (
        <Project name={project.title} key={project.id}>
          {project.description}
        </Project>
      );
    });
    return (
      <div className="projectList">
        {projectNodes}
      </div>
    );
  }
});

var ProjectBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="projectBox">
        <h1>Projects</h1>
        <ProjectList data={this.state.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <ProjectBox url="api/projects/" />,
  document.getElementById('reactContent')
);
