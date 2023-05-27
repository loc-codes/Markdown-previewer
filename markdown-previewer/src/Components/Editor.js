
const Editor = (props) => {
    const handleChange = (event) => {
        props.updatePreviewer(event.target.value)
    }


    return (
    <div>
      <h3>Editor</h3>
      <textarea onChange={handleChange} id="editor" placeholder="Type some markdown"></textarea>
    </div>
    )
}

export default Editor