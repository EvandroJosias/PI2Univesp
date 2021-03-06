import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/cards.module.scss';
import Link from 'next/link';

import '../../validateMask';

import { CardFooter} from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Form } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { Button } from 'reactstrap';
import { CardText } from 'reactstrap';
import { CardHeader } from 'reactstrap';
import { FormGroup } from 'reactstrap';


export function NewUser(){
    return(
        <div className={styles.geral_container}>
            <Card className={styles.card_fullsize_container}>
                <CardHeader className={styles.card_title}>
                    <span className={styles.text_title}>Cadastro Novo Usuário</span>
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        Pessoa Fisica
                    </CardTitle>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="NomeCompleto">
                                        Nome Completo
                                    </Label>
                                    <Input
                                    id="name"
                                    name="name"
                                    placeholder="Informe seu nome completo"
                                    />
                                </FormGroup>
                                </Col>
                        </Row>
                        <Row>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="NomeSocial">
                                        Nome Social
                                    </Label>
                                    <Input
                                    id="nickname"
                                    name="nickname"
                                    placeholder="Como deseja ser chamado(a)?"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="Nascimento">
                                    Nascimento
                                    </Label>
                                    <Input
                                    id="birthday"
                                    name="birthday"
                                    placeholder="Informe quando você nasceu"
                                    type="date"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="CPF">
                                    CPF
                                    </Label>
                                    <Input
                                    id="cpf"
                                    name="cpf"
                                    placeholder="Informe seu CPF (Somente Numeros)"
                                    type="number"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <FormGroup>
                                    <Label for="CEP">
                                    CEP
                                    </Label>
                                    <Input
                                    id="cep"
                                    name="cep"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="Endereco">
                                    Endereço
                                    </Label>
                                    <Input
                                    id="address"
                                    name="address"
                                    placeholder="Ex: Rua Edson Arantes do Nascimento"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label for="Numero">
                                    Numero
                                    </Label>
                                    <Input
                                    id="number"
                                    name="number"
                                    type="number"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="Complemento">
                                    Complemento
                                    </Label>
                                    <Input
                                    id="adicional"
                                    name="adicional"
                                    placeholder="Ex: Apto 7"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="Cidade">
                                    Cidade
                                    </Label>
                                    <Input
                                    id="city"
                                    name="city"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label for="UF">
                                    UF
                                    </Label>
                                    <Input
                                    id="state"
                                    name="state"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>    
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="Email">
                                    Email
                                    </Label>
                                    <Input
                                    id="email"
                                    name="email"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="TelefoneFixo">
                                        Telefone Fixo
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="text" 
                                        pattern="^\([1-9]{2}\)[0-9]{4}\-[0-9]{4}$"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="TelefoneCelular">
                                        Telefone Celular
                                    </Label>
                                    <Input
                                        required id="cellphone"
                                        name="cellphone"
                                        type="text" 
                                        onblur="mask_Phone(this)"
                                        onfocus="cut_Hifen(this)"
                                        placeholder="(99)99999-9999"
                                        pattern="^\([1-9]{2}\)[0-9]{4}\-[0-9]{4}$"
                                    />
                                </FormGroup>
                            </Col>
                        <Row>

                        </Row>
                            <Col md={12}>
                                <FormGroup check>
                                    <Input
                                    id="plataformterm"
                                    name="plataformterm"
                                    type="checkbox"
                                    />
                                    <Label
                                    check
                                    for="Aceite Plataforma"
                                    >
                                    Aceite Plataforma
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup check>
                                    <Input
                                    id="lgpdterm"
                                    name="lgpdterm"
                                    type="checkbox"
                                    />
                                    <Label
                                    check
                                    for="Aceite LGPD"
                                    >
                                    Aceite LGPD
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row> 
                        <Row>
                            <Col md={12}>
                                <FormGroup check>
                                    <Input
                                    id="whatsappterm"
                                    name="whatsappterm"
                                    type="checkbox"
                                    />
                                    <Label
                                    check
                                    for="Aceite Contato Whatsapp"
                                    >
                                    Aceite Contato Whatsapp
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row> 
                        <Row>
                            <Col md={12}>
                                <FormGroup check>
                                    <Input
                                    id="phoneterm"
                                    name="phoneterm"
                                    type="checkbox"
                                    />
                                    <Label
                                    check
                                    for="Aceite Contato Telefone"
                                    >
                                    Aceite Contato Telefone
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row> 
                        <Row>
                            <Col md={12}>
                                <FormGroup check>
                                    <Input
                                    id="emailterm"
                                    name="emailterm"
                                    type="checkbox"
                                    />
                                    <Label
                                    check
                                    for="Aceite Contato Email"
                                    >
                                    Aceite Contato Email
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row> 
                    </Form>
                </CardBody>
                <CardFooter className={styles.card_with_button}>
                    <Link href='/'>
                        <Button classename={styles.all_button}>Enviar</Button>
                    </Link>
                    <Link href='/'>
                        <Button classename={styles.all_button}>Cancelar</Button>
                    </Link>                    
                </CardFooter>
            </Card> 
        </div>
    )
}