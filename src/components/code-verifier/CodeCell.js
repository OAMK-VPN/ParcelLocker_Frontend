import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CodeCell.module.css'

const CodeCell = ({ code, setCode }) => {
  const navigate = useNavigate()

  const handleClick = (element) => {
    
    if (element.target.textContent === "C") {
      setCode(""); // Clear the code
      return;
    }
    else if (element.target.textContent === "Close") {
      handleCancel()
    }
    else {
      if (code.length >= 4) {
        return //set limit input
      }
    }

    setCode((prevState) => {
      if (prevState === "") {
        return element.target.textContent
      } else if (isNaN(Number(prevState))) {
        return "";
      }
      return prevState + element.target.textContent;
    })
  }

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
