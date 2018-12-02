import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {


  datos=["Monitor", "Teclado","Raton"];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alert:AlertController)
 {

 }

  onClickRegistrar()
  {
    /* this.alert.create(
     {
       message:"Hola Yisus", title:"Naguara hubo un error :(", buttons:["Aceptar"]
     }).present();*/

     let x=this;
     let t=this.alert.create
     (
       {
         message:"Datos del Curso",
         inputs:
         [
            {
              name:"nombre", placeholder:"Nombre del Curso"
            }
         ],
         buttons:
         [
           {
             text:"Guardar", handler:function(data)
             {
                if (data.nombre=="")
                   x.MostrarMensaje("Debe escribir el nombre del cuso", "Error")
                   else
                   {
                     if (x.datos.indexOf(data.nombre)==-1)
                     x.datos.push(data.nombre)
                     else
                     {
                       x.MostrarMensaje("Esta repetido","Error")
                     }
                   }
             }
           },
           {
             text:"Cancelar"
           }
         ]
       }
     )
     t.present();
    // this.MostrarError("La conexion a internet se ha perdido")
  }


  MostrarMensaje(mensaje:string,titulo:string)
  {
    let t=this.alert.create
    (
     {
       message:mensaje, title:titulo, buttons:["OK"]
     }
    )
    t.present();
  }


/*MostrarError(mensaje:string)
{ 
    this.alert.create(
     {
       message:mensaje, title:"Naguara hubo un error :(", buttons:["Aceptar"]
     }).present();
}*/




onClickEliminar(dato)
{
   let pos=this.datos.indexOf(dato);
   this.datos.splice(pos,1)
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
