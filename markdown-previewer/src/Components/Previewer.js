const Previewer = (props) => {
    return (
    <div id="previewContainer">
      <h3>Previewer</h3>
      <div id="preview" dangerouslySetInnerHTML={{ __html: props.text }}></div>
    </div>
    )
}

export default Previewer
