import styles from './Window.module.css'

export default function Window({ children }) {
    return (
        <div class={styles.window}>
            <Title title="hello.c" />
            {children}
        </div>
    )
}

function Title({ title }) {
    return (
        <div class={styles.title}>
            <div class={styles.text}>{title}</div>
            <Controls />
        </div>
    )
}

function Controls() {
    return (
        <>
            <div class={styles.close}>x</div>
        </>
    )
}
