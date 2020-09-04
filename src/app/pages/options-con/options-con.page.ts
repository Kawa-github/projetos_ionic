import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController, } from '@ionic/angular';

@Component({
  selector: 'app-options-con',
  templateUrl: './options-con.page.html',
  styleUrls: ['./options-con.page.scss'],
})
export class OptionsConPage{

  tarefas: any[] = [];
  constructor(
    private alertaControl:AlertController,
    private toastControl: ToastController
    ,private actionSheetControl: ActionSheetController
    ){// os comandos desta sessão são executados durante o load da página.
      
    }

async adicionarTarefa(){
  const alerta = await this.alertaControl.create({
    header:'Qual consulta deseja marcar?',
    subHeader:'Somente as consultas disponiveis.',
    inputs: [
      {name: 'nova',type: 'text'},
      {name: 'hour',type: 'datetime-local'},
    ],  
    buttons:[
      {text:'Cancelar',role:'cancel', cssClass:"secondary", 
      handler: ()=>{
        // caso o usuário clique em cancelar???
        console.log('Acho que você clicou em cancelar?!?!?!');
      }}
    ,{
      text: 'Ok', 
      handler: (form) =>{
       //debugger; 
       this.addTarefa(form.nova);
      }
    }
  ]
  });
  await alerta.present();
}

async callData(){
  const alerta = await this.alertaControl.create({
    inputs: [
      {name: 'data',type: 'date'},
    ],  
    
  }); 
}
 async addTarefa(nova: string) {
  if (nova.trim().length < 1){
    const toast = await this.toastControl.create({
      message: 'Informe o que precisa fazer',
      duration: 2000,
      position: 'middle',
      color:'primary'
    });  
    toast.present();
    return;
  }
  let tarefa = {nome: nova, feito: false};
  //debugger;
  this.tarefas.push(tarefa);
}//final do método addTarefa



async abrirAcoes(tarefinha:any){
  const actionsheet = await this.actionSheetControl.create({
    header: "Deseja marcar sua consulta?",
    buttons: [{
      text: tarefinha.feito ? 'Desmarcar' : 'Marcar',
      icon: tarefinha.feito ? 'radio-button-off' : 'checkmark-circle',
      handler:()=>{
        tarefinha.feito = !tarefinha.feito; // inverte o valor de task
      }
     },
   {
     text: 'Cancelar',
     icon: 'close',
     role: 'cancel',
     handler: () => {
       console.log('clicou em cancelar');
     }
   }
   
   ],
  });
  await actionsheet.present();// executar a actionsheet
}// final do actionsheet



}