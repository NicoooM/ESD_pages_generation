import styles from './template.module.css'

export default function App({ company }) {

    return (
        <div className={styles.template}>
            <header className={styles.header}>

            </header>
            {company.title}
        </div>
    )
}