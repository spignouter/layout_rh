import React from 'react'
import styles from './Header.module.css'
import iconFont from './IconFont.module.css'

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <img
            src="../images/RE_logo.png"
            className={styles.imgLogo}
            alt="логотип"
          />
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerList}>
            <li className={styles.headerItem}>
              <a className={styles.headerItemA} href="">
                Главная
              </a>
            </li>
            <li className={styles.headerItem}>
              <a className={styles.headerItemA} href="">
                Поиск
              </a>
            </li>
            <li className={styles.headerItem}>
              <a className={styles.headerItemA} href="">
                О сайте
              </a>
            </li>
            <li className={styles.headerItem}>
              <a className={styles.headerItemA} href="">
                Связь с нами
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.headerUser}>
          <i className={iconFont.iconVector1}></i>
          <i className={iconFont.iconVector3}></i>
          <img src="images/user.png" className={styles.imgUser} alt="" />
          <p>ID пользователя</p>
        </div>
      </div>
    </div>
  )
}
export default Header
