import styles from './template.module.css'

const transformTitle = (title) => {
    const newTitle = title
    newTitle[0].toUpperCase()
    return newTitle
}

export default function App({ company }) {

    return (
        <div className={styles.template} style={{ backgroundColor: company.backgroundColor }}>
            <header className={styles.header}>
                <img src={company.logo} alt={company.title} />
            </header>
            <div className={styles.container}>
                <h1>Title</h1>
                <p><strong style={{ color: company.color }}>{company.title}</strong> is excited to announce our participation in the upcoming <strong style={{ color: company.color }}>AI Futures</strong> event on March 15th, 2023. <br />
                    This worldwide forum on innovation and AI will bring together experts in the field to discuss and explore the latest advancements in the industry. We are proud to be a part of this event and look forward to sharing our latest AI technology and developments with the community. <br />
                    Come visit us at <strong style={{ color: company.color }}>{company.location}</strong>, where we will be showcasing our AI technology and innovations.</p>
                <p>Our team of experts will be available to answer any questions and provide demonstrations of our products and solutions. This is a unique opportunity to see firsthand the advancements in AI technology.
                    Don't miss this opportunity to experience the future of AI with Sony. We look forward to seeing you there !</p>
            </div>
            <footer>
                <p>@ 2023 {company.title}</p>
                <p>{company.mobile}</p>
            </footer>
        </div>
    )
}