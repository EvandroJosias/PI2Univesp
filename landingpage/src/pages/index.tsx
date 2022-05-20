import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/cards.module.scss';
import { Card, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <div> 
      <Card className={styles.cardcenterposition}>
        <CardHeader>
          Informações
        </CardHeader>
        <CardBody>
          Este sistema foi idealizado como projeto integrador da Univesp
        </CardBody>
        <CardFooter>
          <Link href='/Newuser'>
            <Button>Abra sua conta</Button>
          </Link>
          <Link href='/login'>
            <Button>Login Teste Total</Button>
          </Link>                    
        </CardFooter>
      </Card>
    </div>  
  )
}
