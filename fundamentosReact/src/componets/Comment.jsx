import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://github.com/bgoomes.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Gomes</strong>
                            <time dateTime="2022-05-11 08:00">Cerca de 1h</time>
                        </div>

                        <button title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito Bom, parabéns!!
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}
