import React from 'react'
import styles from '../styles/Home.module.css'

const ML = () => (
  <>
    <title>ML</title>
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>✨Machine Learning✨</h1>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '15vh',
        }}
      >
        <div className={styles.card}>
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '15vh',
            }}
          >
            {' '}
            GreenBot contains multiple aspects and uses{' '}
          </h2>
        </div>
      </div>
    </>
  </>
)

export default ML
