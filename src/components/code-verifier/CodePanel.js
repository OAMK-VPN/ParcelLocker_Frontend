import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import CodeCell from "./CodeCell";
import styles from './CodePanel.module.css'
import { baseUrl } from '../../utils/constants';

const CodePanel = () => {
  const [codeNumber, setCodeNumber] = useState(null);
  const { role } = useLocation().state;
  const [status, setStatus] = useState("");

  const navigate = useNavigate()

  const handleOK = () => {
    let lockerId = localStorage.getItem("lockerId");

    if (!lockerId) {
      navigate("/")
      return;
    }

    fetch(`${baseUrl}/api/parcels/public/${role}/locker/${lockerId}/code/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: codeNumber
        })
      })
      .then(response => response.json())
      .catch(error => {
        console.error(error)
        setStatus(error)
      })
      .then(data => {
        if (data.isOpen) {
          setStatus("Successfully open a cabinet")
          handleSuccess();
        } else {
          setStatus("The provided code is not correct")
        }
      })

  }

  const handleSuccess = () => {
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  return (
    <div className={styles.CodePanel}>
      {status && (<h2 className={styles.h2}>{status}</h2>)}
      <div className={styles.searchBox}>
        <input type="number" placeholder="code" className={styles.searchinput} value={codeNumber} maxLength={4} readOnly />
        <button onClick={handleOK}>OK</button>
      </div>
      <div className={styles.buttons_container}>
        <CodeCell code={codeNumber} setCode={setCodeNumber} />
      </div>
    </div>
  )
}

export default CodePanel