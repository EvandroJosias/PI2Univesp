import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/cards.module.scss';
import { Card, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.geral_container}> 
      <Card className={styles.card_main_container}>
        <CardHeader className={styles.card_title}>
          <span className={styles.text_title}>Informações</span>
        </CardHeader>
        <CardBody className={styles.card_information}>
          <br></br>Este sistema foi idealizado como trabalho do
          <br></br>Projeto Integrador da Univesp 2 Sem. 2022.
          <br></br><br></br>
          <br></br>Uma pessoa pode se cadastrar no sistema para:
          <br></br>* Ofertar um serviço
          <br></br>* Contratar um serviço de outr profissional          
        </CardBody>
        <CardFooter className={styles.card_with_button}>
          <Link href='/Newuser'>
            <Button classename={styles.all_button}>Abra sua conta</Button>
          </Link>
          <Link href='/Login'>
            <Button classename={styles.all_button}>Login</Button>
          </Link>                    
        </CardFooter>
      </Card>
    </div>  
  )
}
