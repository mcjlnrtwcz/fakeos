import Window from '../Window/Window'

import styles from './Desktop.module.css'

export default function Desktop() {
    return (
        <div class={styles.desktop}>
            <Window>
                <pre class={styles.temp}>{`#include <stdio.h>

int main() {
   printf("Hello World!");
   return 0;
}`}</pre>
            </Window>
        </div>
    )
}
