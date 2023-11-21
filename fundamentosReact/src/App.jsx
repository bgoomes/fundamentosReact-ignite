import { Header } from "./componets/header"
import { Post } from "./componets/Post"
import "./global.css"

import styles from './App.module.css'
import { Sidebar } from "./componets/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Bruno Gomes" 
              content="blablablablabla"
            />
            <Post
              author="Bruno Gomes" 
              content="blablablablabla"
            />
          </main>
      </div>
     
    </div>
    
  )
}


