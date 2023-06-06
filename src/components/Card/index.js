import styles from "./Card.module.css"

export default function Card({ imgFilme, tituloFilme, resumoFilme }) {
   return (
      <div className={styles.container__filme}>
         <img className={styles.img__filme} src={imgFilme} alt={tituloFilme} />
         <h1 className={styles.titulo__filme}>{tituloFilme}</h1>
         <p className={styles.resumo__filme}>{resumoFilme}</p>
      </div>
   )
}