import styles from "./Cabecalho.module.css"
export default function Cabecalho() {
   const IMG_LOGO_URL = '/images/2.png'

   return (
      <header className={styles.cabecalho}>
         <img className={styles.logo} src={IMG_LOGO_URL} alt="logo"/>
      </header>
   )
}