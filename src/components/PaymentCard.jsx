import React from "react";
import styles from './Payment.module.css'

const PaymentCard = ({ cards }) => {

    return (
        <div className={styles.maindiv}>

            {cards.map((card) => (
                <div className={styles.main} key={card.id} style={card.heading==="Amazon Gift Pay"? {backgroundColor: "#ffa500"}:{backgroundColor: "#f5f5f5"}}>
                    <div className={styles.topsection}>
                        <div>{card.date}</div>
                        <div><img src={card.logo} alt="logo" /></div>
                    </div>
                    <div className={styles.para}>{card.para}</div>
                    <div className={styles.heading}><h2>{card.heading}</h2></div>
                    <div className={styles.buttomsection}>
                    <div>{card.subheading}</div>
                    <div><img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="right-arrow" /></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export { PaymentCard };