//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/cards.module.scss';
import { Card, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <div> 
      <Card className={styles.card_main_container}>
        <CardHeader className={styles.card_title}>
          Informações
        </CardHeader>
        <CardBody>
          Este sistema foi idealizado como projeto integrador da Univesp
        </CardBody>
        <CardFooter className={styles.card_with_button}>
          <Link href='/Newuser'>
            <Button classename={styles.all_button}>Abra sua conta</Button>
          </Link>
          <Link href='/login'>
            <Button classename={styles.all_button}>Login</Button>
          </Link>                    
        </CardFooter>
      </Card>
    </div>  
  )
}
