class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.initialContent,
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
    const markdown = marked(this.state.content);
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

Previewer.defaultProps = {
  initialContent: '',
};

Previewer.propTypes = {
  initialContent: React.PropTypes.string,
};

const initialContent = "# Markdown Previewer\nI'm using _markdown_ with React**JS**, woohoo.\n";

ReactDOM.render(
  <Previewer initialContent={initialContent}/>,
  document.getElementById('app')
);
