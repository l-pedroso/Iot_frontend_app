import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.scss'
import Button from 'react-bootstrap/Button';

const deviceList = [
  { key: 1, name: 'Lâmpada 1' },
  { key: 1, name: 'Lâmpada 2' },
  { key: 1, name: 'Lâmpada 3' },
  { key: 1, name: 'Lâmpada 4' },
  { key: 1, name: 'Lâmpada 4' },
  { key: 1, name: 'Lâmpada 4' },
  { key: 1, name: 'Lâmpada 4' },
  { key: 1, name: 'Lâmpada 4' },
  { key: 1, name: 'Lâmpada 4' },
  { key: 1, name: 'Lâmpada 4' },
  { key: 1, name: 'Lâmpada 4' },
]

function Item(props) {
  if (props.itens != undefined) {
    const itens = props.itens;
    const listItem = itens.map((item, index) => {
      const name = item.name;

      return (
        <li key={index}>
          <Link href="/">
            <a className={styles.name}>{name}</a>
          </Link>
        </li>
      )

    })
    return listItem;
  }
  return <li className={styles.ndevices}>Sem dispositivos</li>
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>


      <header className={styles.headerContainer}>
        <h3>Devices</h3>
      </header>


      <main className={styles.mainContainer}>
        <ul className={styles.listContainer}>
          <Item itens={deviceList}></Item>
          <li className={styles.blank}></li>
        </ul>
        <Button className={styles.btn} variant="primary">+</Button>
      </main>

      <footer className={styles.footerContainer}></footer>
    </div>
  )
}
