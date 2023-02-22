
import classNames from 'classnames'
import React from 'react'
import section from '../Section.module.css'
import styles from './Company.module.css'

function Company() {
  return (
    <div className={section.sectionCompany}>
      <div className={styles.companyCard}>
        <div className={styles.companyCardTitle}>
          <img src="images/company-card__title.png" alt="АА" />
          <h3>Название ЖК</h3>
          <span className={styles.companyCardTitleSub}>Имя затстройщика</span>
        </div>
        <p className={styles.companyCardParagraph}>
          Группа Аквилон - одна из ведущих девелоперских компаний,
          предоставляющих полный спектр услуг на рынке недвижимости, создана в
          Архангельске 13 октября 2003 года, более 18 лет на рынке. Входит в
          ТОП-20 крупнейших застройщиков страны, в 10-ку крупнейших застройщиков
          Санкт-Петербурга. Группа Аквилон признана системообразующим
          предприятием России. География присутствия: Москва, Санкт-Петербург,
          Ленинградская область, Архангельск, Северодвинск.
        </p>
        <div className={styles.companyCardButtons}>
          <div className={styles.gridRight}>
            <a href="#!" className={styles.btn}>
              Чат онлайн
            </a>
            <a href="#!" className={styles.btn}>
              Обратный звонок
            </a>
          </div>
          <div className={styles.gridLeft}>
            <a href="#!" className={classNames(styles.btn)}>
              Редактировать
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
