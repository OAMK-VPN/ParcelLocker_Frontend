import React , { useState } from 'react'
import CodeCell from "./CodeCell";
import styles from './CodePanel.module.css'

const CodePanel = () => {
  const [message, setMessage] = useState("error")

  const [codeNumber, setCodeNumber] = useState(null);


  return (
    <div className={styles.CodePanel}>
      <h2>{codeNumber}</h2>
      <div className={styles.searchBox}>
        <input type="number" placeholder="code" className={styles.searchinput} value={codeNumber} maxLength={4}/>
        <button>OK</button>
      </div>
      <div className={styles.buttons_container}>
      <CodeCell code={codeNumber} setCode={setCodeNumber}/>
      </div>
    </div>
  )
}

export default CodePanel