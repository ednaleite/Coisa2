import React, {Component} from 'react'
import {Alert} from 'reactstrap'
import {connect} from 'react-redux'
import '../chat/chat.css';



class ChatConversa extends Component{
  
  
   renderMensagem(msg,k){
    
    if(msg.texto.substr(0,3) == "Dig"){
        return (
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa'/>
                </div>
           
            
        </div>
            
        </span>
        
        }

        {
            msg.origem === "bot" && <span>
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa'/>
                    </div>
                    
                    <div id='textobc'>
                        <Alert color='dark' id='teste4'><span>{msg.texto}</span>
                        <br/><br/>
                            1 - Alteração/Inclusão de dependentes<br/>
                            2 - Negociação de Débitos<br/>
                            3 - Mudança de Plano ou de Titularidade<br/>
                            4 - Exclusão de serviços<br/>
                            5 - Emissão de carnês/boletos<br/>
                            6 - Aluguel ou venda de materiais hospitalares<br/>
                        </Alert>
               
                    </div>
                
                </div>
            </span>
        }
        
            </div>


    )

    }

    

    var MensagemWhats = "Olá, gostaria de saber sobre o atendimento póstumo";
    localStorage.setItem('MensagemWhats', "https://wa.me/85989269491/?text=" + MensagemWhats.replace(/ /gi,'%20'));


     if(msg.texto.substr(0,3) == "Olá"){
        return (
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa'/>
                </div>
            
        </div>
            
        </span>
        
        }

        {
            
            msg.origem === "bot" && <span>
                
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa'/>
                    </div>
                    <a id='textobc' href={MensagemWhats}>
                     
                            <Alert color='dark' id='teste3'>Clique aqui para conversar com nosso atendente<br/><span id='link'>{msg.texto}</span></Alert>
                    </a>
                </div>
            </span>
        }
        
            </div>


    )

    }


    if(msg.texto.substr(0,3) == "Ate"){
        return (
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa'/>
                </div>
            
        </div>
            
        </span>
        
        }

        {
            msg.origem === "bot" && <span>
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa'/>
                    </div>
                    
                    <div id='textobc'>
                        <Alert color='dark' id='teste4'><span>{msg.texto}</span>
                        <br/><br/>
                            Digite:<br/>
                            1 - Contatos<br/>
                            2 - Planos<br/>
                            3 - Solicitar representante<br/>
                            4 - Atendimento póstumo
                        </Alert>
                    </div>
                </div>
            </span>
        }
        
            </div>


    )

    }
    
        if(msg.texto.substr(0, 5) == 'https'){
            return (
                        
                <div key = {k}>
            
            {
                msg.origem === "user" && <span>
                    
                {/* <Badge color='info' id="usertalk">Você disse</Badge> */}
                
                <div className='usuario'>

                <div id='textouc'>
                        <Alert color='info' id='teste'>{msg.texto}</Alert>
                </div>

                    <div>
                        <img src='images/duvidas.png' id='userconversa'/>
                    </div>
                
            </div>
                
            </span>
            
            }

            {
                msg.origem === "bot" && <span>
                    <div className='iracema' id='fazendolink'>
                        <div>
                            <img src='images/iracema.jpg' id='botconversa'/>
                        </div>
                        
                        <a id='textobc' href={msg.texto}>
                            <Alert color='dark' id='teste3'>Clique aqui:<br/><span id='link'>{msg.texto}</span></Alert>
                        </a>
                    </div>
                </span>
            }
            
                </div>


        )
            
        }else{
            return (
            
                <div key = {k}>
            
            {
                msg.origem === "user" && <span>
                    
                {/* <Badge color='info' id="usertalk">Você disse</Badge> */}
                
                <div className='usuario'>

                <div id='textouc'>
                        <Alert color='info' id='teste'>{msg.texto}</Alert>
                </div>

                    <div>
                        <img src='images/duvidas.png' id='userconversa'/>
                    </div>
                
            </div>
                
            </span>
            
            }

            {
                msg.origem === "bot" && <span>
                    <div className='iracema' id='fazendolink'>
                        <div>
                            <img src='images/iracema.jpg' id='botconversa'/>
                        </div>
                        
                        <div id='textobc'>
                            <Alert color='dark' id='teste2'>{msg.texto}</Alert>
                        </div>
                    </div>
                </span>
            }
            
                </div>
    
            )
        }

            
            
            
    
}

   
    render(){
    
        return(
             <div className='chat-conversa'>
                {
                   Object.keys(this.props.mensagens).map(key => {
                        return this.renderMensagem(this.props.mensagens[key],key)
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null)(ChatConversa)