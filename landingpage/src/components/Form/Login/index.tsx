import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/cards.module.scss';
import { Card, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';
import { Form, FormGroup, Row, Col, Input, Label } from 'reactstrap';
import Link from 'next/link';

function testfunc( ){
   alert('teste de função');
}

export function Login(){
    return(
        <div  className={styles.geral_container}>
            <Card className={styles.card_main_container}>
                <CardHeader className={styles.card_title}>
                    <span className={styles.text_title}>Login - Exchange</span>
                </CardHeader>
                <CardBody className={styles.card_information}>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="Usuario">
                                        Email Usuário
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Informe o email de login"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="Password">
                                        Senha
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Digite a senha do Usuário (Mínimo 8 caracteres)"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>          
                </CardBody>
                <CardFooter className={styles.card_with_button}>
                    <Link href='/' onClick={ () => { alert("redirecting to teste")} } >
                        <Button classename={styles.all_button}>Confirmar</Button>
                    </Link>
                    <Link href='/'>
                        <Button classename={styles.all_button}>Cancelar</Button>
                    </Link>                    
                </CardFooter>
            </Card>
        </div>
    )
}