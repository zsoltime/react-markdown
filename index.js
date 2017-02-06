class Previewer extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "# Markdown Previewer\nI'm using _markdown_ with React**JS**, woohoo.\n",
    };
    marked.setOptions({
      sanitize: true,
      smartypants: true,
    });
  }
  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }
  render() {
    let markdown = marked(this.state.content);
    return (
      <div className="container">
        <textarea
          className="editor"
          onChange={event => this.handleChange(event)}
          defaultValue={this.state.content}
        />
        <div
          className="preview"
          dangerouslySetInnerHTML={{__html: markdown}}
        />
      </div>
    );
  }
}

ReactDOM.render(<Previewer />, document.getElementById('app'));
