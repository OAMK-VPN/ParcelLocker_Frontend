import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CodeCell.module.css'

const CodeCell = ({ setCode, code }) => {
  const [value, setValue] = useState(null)
  const navigate = useNavigate()


  const handleClick = (element) => {
    const value = element.target.textContent;


    setValue(element.target.textContent)
    if (element.target.textContent === "C") {
      setCode(""); // Clear the code
      code = ""; //update the code prop
    }
    else if (element.target.textContent === "Close") {
      handleCancel()
      //if (element.target.textContent === "Cancel"), Navigate back to MainPage
    }
    else {
      if (!code) {
        setCode(null)

      }
      else if (code.length >= 4) {
        return //set limit input
      }
    }

    setCode((prevState) => {
      if (prevState === null) {
        return element.target.textContent
      }
      return prevState + element.target.textContent;
    })
  }

  console.log(value)

  console.log(typeof code)


  const handleCancel = () => {
    navigate("/")
  }

  return (
    <div className={styles.CodeCell}>
      <div className={styles.buttons_container}>
        <button className={styles.buttons} onClick={handleClick}>1</button>
        <button className={styles.buttons} onClick={handleClick}>2</button>
        <button className={styles.buttons} onClick={handleClick}>3</button>
      </div>
      <div className={styles.buttons_container}>
        <button className={styles.buttons} onClick={handleClick}>4</button>
        <button className={styles.buttons} onClick={handleClick}>5</button>
        <button className={styles.buttons} onClick={handleClick}>6</button>
      </div>
      <div className={styles.buttons_container}>
        <button className={styles.buttons} onClick={handleClick}>7</button>
        <button className={styles.buttons} onClick={handleClick}>8</button>
        <button className={styles.buttons} onClick={handleClick}>9</button>
      </div>
      <div className={styles.buttons_container}>
        <button className={styles.buttons} onClick={handleClick}>C</button>
        <button className={styles.buttons} onClick={handleClick}>0</button>
        <button className={styles.buttons} onClick={handleClick}>Close</button>
      </div>
    </div>
  );
}

export default CodeCell;
