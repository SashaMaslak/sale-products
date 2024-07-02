import React from "react"
import css from "./TextArea.module.css"

export const TextArea = ({ textareaPlaceholder, title, height, value }) => {
  return (
    <div className={css.textareaWrapper}>
      <textarea
        value={value}
        className={css.textarea}
        placeholder={textareaPlaceholder}
        style={{ height: height, width: "100%" }}
      ></textarea>
    </div>
  )
}
