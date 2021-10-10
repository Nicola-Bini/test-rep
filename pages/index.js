import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dashboard from '../public/img.png'

export default function Home() {
  return (
      <body>
        <Image src={dashboard} alt="dashboard"/>
      </Body>
  )
}
