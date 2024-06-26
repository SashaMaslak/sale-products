import React from "react"
import css from "./TextArea.module.css"

export const TextArea = ({ textareaPlaceholder, title, height }) => {
  return (
    <div className={css.textareaWrapper}>
      <textarea
        className={css.textarea}
        placeholder={textareaPlaceholder}
        style={{ height: height, width: "100%" }}
      ></textarea>
    </div>
  )
}
