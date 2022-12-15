import React from 'react'
import styles from '../styles/Home.module.css'

export default function Login() {
  const SpecialClick = () => {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ'
  }

  return (
    <>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '15vh',
        }}
      >
        Login for a surprise!!
      </h1>
      <div className={styles.login}>
        {/*locate the word Name: one line above the box*/}
        <h3
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'top',
            height: '0vh',
          }}
        >
          {' '}
          Name: <br />
        </h3>
        <input type="text" placeholder="Name" /> <br />
      </div>
      <div className={styles.login}>
        <h3>
          {' '}
          Password: <br />{' '}
        </h3>
        <input type="text" placeholder="Password" /> <br />
        <button onClick={SpecialClick}>Login</button>
      </div>
    </>
  )
}
