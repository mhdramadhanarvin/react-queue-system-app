const Button = (props) => {

  return (
    <button
      type={props.type}
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1 mb-5"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button
