const Editor = props => (
  <textarea
    className="editor"
    onChange={event => props.onChange(event)}
    defaultValue={props.content}
  />
);

Editor.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  content: React.PropTypes.string.isRequired,
};

const Preview = props => (
  <div
    className="preview"
    dangerouslySetInnerHTML={{__html: props.markdown}}
  />
);

Preview.propTypes = {
  markdown: React.PropTypes.string.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.initialContent,
    };
    marked.setOptions({
      sanitize: true,
      smartypants: true,
    });
    this.handleChange = this.handleChange.bind(this);
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
        <Editor
          content={this.state.content}
          onChange={this.handleChange}
        />
        <Preview
          markdown={markdown}
        />
      </div>
    );
  }
}

App.defaultProps = {
  initialContent: '',
};

App.propTypes = {
  initialContent: React.PropTypes.string,
};

const initialContent = "# Markdown App\nI'm using _markdown_ with React**JS**, woohoo.\n";

ReactDOM.render(
  <App initialContent={initialContent}/>,
  document.getElementById('app')
);
