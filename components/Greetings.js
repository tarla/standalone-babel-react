class Greetings extends React.Component {
  constructor (props) {
    super(props);
    this.state = { name: '' };
    this.changeName = this.changeName.bind(this);
  }

  changeName (event) {
    this.setState({ name: event.target.value });
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <a>Hello: <strong>{this.state.name}</strong></a>
        </div>
        <div className="row">
          <input type="text" value={this.state.name} onChange={this.changeName} placeholder="Type your name..." />
        </div>
      </div>
    );
  }
}
