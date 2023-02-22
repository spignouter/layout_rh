import styles from './Location.module.css'
import section from '../Section.module.css'
import React from 'react'

function Location() {
  return (
    <div className="">
      <div className={styles.location}>
        <div className={styles.locationTitle}>
          <div className={styles.locationTitle1}>
            <h3>Расположение</h3>
          </div>
          <div className={styles.locationTitle2}>
            <h4>Юбилейный микрорайон, 117 стр</h4>
          </div>
        </div>
        <div className={styles.locationDeadline}>Срок сдачи</div>
        <div className={styles.locationDeadline1}>Март 2023 года</div>
        <div className={styles.locationPayment}>Оплата</div>
        <div className={styles.locationPayment1}>ДКП</div>
        <div className={styles.locationPayment2}>Ипотека</div>
        <div className={styles.locationPayment3}>
          Рассрочка: 70% первый взнос, 30% на 3 месяца
        </div>
        <div className={styles.locationCharacteristics}>Характеристики</div>
        <div className={styles.locationCharacteristics1}>Бизнес-класс</div>
        <div className={styles.locationCharacteristics2}>
          Управляющая компания
        </div>
        <div className={styles.locationCharacteristics3}>
          Закрытая охраняемая территория
        </div>
        <div className={styles.locationCharacteristics4}>1,5 км до моря</div>
        <div className={styles.locationCharacteristics5}>Черновая отделка</div>
        <div className={styles.locationCharacteristics6}>
          Вид на горы, море, парк, атриум
        </div>
        <div className={styles.locationCommunications}>Коммуникации</div>
        <div className={styles.locationCommunications1}>
          Центральное отопление
        </div>
        <div className={styles.locationCommunications2}>
          Водоснабжение и канализация
        </div>
        <div className={styles.locationCommunications3}>Эллектричество</div>
        <div className={styles.locationButtons}>
          <a href="" className="btn company-card__btn">
            Изменить
          </a>
        </div>
      </div>
    </div>
  )
}

export default Location
