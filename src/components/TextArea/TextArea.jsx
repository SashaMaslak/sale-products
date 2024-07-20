import React from "react"
import css from "./TextArea.module.css"

export const TextArea = ({
  textareaPlaceholder,
  height,
  value,
  onChange,
  onBlur,
  isEmpty,
}) => {
  return (
    <div className={css.textareaWrapper}>
      <textarea
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${css.textarea} ${isEmpty && css.textareaEmpty}`}
        placeholder={textareaPlaceholder}
        style={{ height: height, width: "100%" }}
      ></textarea>
    </div>
  )
}
