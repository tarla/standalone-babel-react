class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Greetings />
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("App"));
