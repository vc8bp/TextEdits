import React from 'react'

export default function Alert(props) {

  const capitalize = (Word) => {
    const lower = Word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
      props.alert && <div className="alert alert-success" role="alert">
      <strong>{capitalize(props.alert.Type)}</strong>{props.alert.msg}
      </div>

    
  )
}
