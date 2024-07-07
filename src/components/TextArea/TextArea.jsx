import React from "react"
import css from "./TextArea.module.css"

export const TextArea = ({ textareaPlaceholder, height, value, onChange }) => {
  return (
    <div className={css.textareaWrapper}>
      <textarea
        value={value}
        onChange={onChange}
        className={css.textarea}
        placeholder={textareaPlaceholder}
        style={{ height: height, width: "100%" }}
      ></textarea>
    </div>
  )
}
