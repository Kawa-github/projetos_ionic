import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController, } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-options-con',
  templateUrl: './options-con.page.html',
  styleUrls: ['./options-con.page.scss'],
})
export class OptionsConPage{

  consultas: any[] = [];
  constructor(
    private alertaControl:AlertController,
    private toastControl: ToastController,
    private actionSheetControl: ActionSheetController,
    ){}

  async adicionarConsulta(){
  const alerta = await this.alertaControl.create({
    header:'Qual consulta deseja marcar?',
    subHeader:'Obs: Somente as consultas disponiveis.',
    inputs: [
      {name: 'novaCon',type: 'text' , placeholder: 'Ex: Dentista'},
      {name: 'date',type:'text' , placeholder: 'Data e hora. Ex: 10/04/2020 14:00'},
    ],  
    buttons:[
      {text:'Cancelar',role:'cancel', cssClass:"secondary", 
      handler: ()=>{
        console.log('Você clicou em cancelar?');
      }}
    ,{
      text: 'Ok', 
      handler: (form) =>{
       this.addConsulta(form);
      }
    }
  ]
  });
  await alerta.present();
}

 async addConsulta(dadoscon: any[]) {
  if (dadoscon.length < 1){
  }
  let consulta = {nome: dadoscon.novaCon, data: dadoscon.date, feito: false};
  this.consultas.push(consulta);
}//final do método

excluirConsulta(consulta){

}

async abrirAcoes(confirmar:any){
  const actionsheet = await this.actionSheetControl.create({
    header: "Deseja marcar sua consulta?",
    buttons: [{text:confirmar.data}
      ,{
      text: confirmar.feito ? 'Desmarcar' : 'Marcar',
      icon: confirmar.feito ? 'radio-button-off' : 'checkmark-circle',
      handler:()=>{
        confirmar.feito = !confirmar.feito; // inverte o valor de task
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