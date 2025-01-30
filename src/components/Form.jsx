

function Form({newName}) {

  const handleChange = (ev) => {
    newName(ev.target.value);
  }

  return (
    <form className="form">
      <label>Introduce tu nombre: </label>
      <input type="text" onChange={handleChange}/>
    </form>
  )
}

export default Form