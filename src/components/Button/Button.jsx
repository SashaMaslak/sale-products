import React from "react"
import { MdAddToPhotos } from "react-icons/md"
import { RiTableView } from "react-icons/ri"
import { MdApps } from "react-icons/md"
import CartIcon from "components/Icons/CartIcon/CartIcon"
import css from "./Button.module.css"

const Button = ({
  name,
  value,
  onClick,
  buttonType,
  buttonTitle,
  styleAdd,
  width,
  iconName,
  iconSize,
  isActive,
}) => {
  let iconBtn = null
  switch (iconName) {
    case "preview":
      iconBtn = <MdApps className={`icon`} size={iconSize} />
      break
    case "table":
      iconBtn = <RiTableView className={`icon`} size={iconSize} />
      break
    case "addProduct":
      iconBtn = <MdAddToPhotos className={`icon`} size={iconSize} />
      break
    case "buyProduct":
      iconBtn = <CartIcon type="add" size={iconSize} />
      break
    default:
      iconBtn = null
  }
  return (
    <div className={css.buttonGroup}>
      <button
        name={name}
        value={value}
        onClick={onClick}
        type={buttonType}
        className={`${css.button} ${
          styleAdd === "border" && css.buttonBorder
        } ${styleAdd === "light" && css.buttonLight} ${
          isActive && css.buttonActive
        }`}
        style={{ width: width }}
      >
        {iconName && iconBtn}
        <span style={{ lineHeight: `${iconSize}px` }} className={css.textBtn}>
          {buttonTitle}
        </span>
      </button>
    </div>
  )
}

export default Button
