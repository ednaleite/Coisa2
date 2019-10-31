import React, {Component} from 'react'
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'
import {connect} from 'react-redux'
import {enviaMensagem} from '../store/actions/chat'
import {conversaWatson} from './../store/actions/watson'
import '../chat/chat.css'


class ChatMensagem extends Component{
   constructor(props){
       super(props)
       this.inputEnviaTexto = this.inputEnviaTexto.bind(this)
       this.props.conversaWatson("inicio", "")
   }

   inputEnviaTexto(){

        

        const b = document.getElementById('input');
        
        const mensagem = {
            texto: b.value,
            origem: 'user'
        }
        
        let contexto = {}
        //console.log('negocio', this.props.resposta)
        if (this.props.resposta.data && this.props.resposta.data.context) {
            contexto = this.props.resposta.data.context
        }

        if(b.value != ""){
            // if(localStorage.getItem('opcao1')){
            //     this.props.enviaTexto(localStorage.getItem('opcao1') + "proximo" + mensagem)
            //     this.props.conversaWatson(localStorage.getItem('opcao1') + "proximo" + mensagem, contexto)
            //     var a = localStorage.getItem('opcao1') + "proximo" + b.value;
            //     b.value = ''
            //     alert(a);
            // }else{
                this.props.enviaTexto(mensagem)
                this.props.conversaWatson(mensagem, contexto)
                // if(b.value == '2'){
                //     localStorage.setItem('opcao1', b.value);   
                // }
                // b.value = ''
                // alert('Eu não entendi foi nada meu filho');
            }

            
          }
     
   

    
    render(){
        return(
            <div className='chat-mensagem'>
                <hr/>
                <InputGroup>
                <Input placeholder='Pergunte-me' id="input" required/>
               <InputGroupAddon addonType='append'>
                   <Button color='dark' onClick={this.inputEnviaTexto} >Enviar</Button>
               </InputGroupAddon>
                </InputGroup>
            
            </div>
        );
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
        conversaWatson: (msg, contexto) => dispatch(conversaWatson(msg, contexto))
    }
}

const mapStateToProps = (state) => {
    return{
        resposta: state.watson.respostas
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatMensagem)
