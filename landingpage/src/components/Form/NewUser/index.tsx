import styles from './styles.module.scss';

export function NewUser(){
    return(
        <div>
            <form>
                <div>
                <label>Nome Completo</label>
                <input type="text" id="name" name="name" required/>
                </div>
                <div>
                <label>Nome Social_Apelido</label>
                <input type="text" id="nickname" name="nickname" required/>
                </div>
                <div>
                <label>Nascimento</label>
                <input type="text" id="birthday" name="birthday" required/>
                </div>
                <div>
                <label>CPF</label>
                <input type="text" id="cpf" name="cpf" required/>
                </div>
                <div>
                <label>Endereço</label>
                <input type="text" id="address" name="address" required/>
                </div>
                <div>
                <label>Numero</label>
                <input type="text" id="number" name="number" required/>
                </div>
                <div>
                <label>Complemento</label>
                <input type="text" id="adicional" name="adicional" required/>
                </div>
                <div>
                <label>CEP</label>
                <input type="text" id="cep" name="cep" required/>
                </div>
                <div>
                <label>Cidade</label>
                <input type="text" id="city" name="city" required/>
                </div>
                <div>
                <label>Estado</label>
                <input type="text" id="state" name="state" required/>
                </div>
                <div>
                <label>Pais</label>
                <input type="text" id="country" name="country" required/>
                </div>
                <div>
                <label>Email de Contato</label>
                <input type="text" id="email" name="email" required/>
                </div>
                <div>
                <label>Telefone Fixo</label>
                <input type="text" id="phone" name="phone" required/>
                </div>
                <div>
                <label>Telefone Celular </label>
                <input type="text" id="cellphone" name="cellphone" required/>
                </div>
                <div>
                <label>Telefone Whatsapp </label>
                <input type="text" id="whatsapp" name="whatsapp" required/>
                </div>
                <div>
                <label>Termo de Aceite Plataforma </label>
                <input type="text" id="plataformterm" name="plataformterm" required/>
                </div>
                <div>
                <label>Termo de Aceite LGPD </label>
                <input type="text" id="lgpdterm" name="lgpdterm" required/>
                </div>
                <div>
                <label>Termo de Aceite Contato Whatsapp</label>
                <input type="text" id="whatsappterm" name="whatsappterm" required/>
                </div>
                <div>
                <label>Termo de Aceite Contato Telefone</label>
                <input type="text" id="phoneterm" name="phoneterm" required/>
                </div>
                <div>
                <label>Termo de Aceite Contato Email</label>
                <input type="text" id="emailterm" name="emailterm" required/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}