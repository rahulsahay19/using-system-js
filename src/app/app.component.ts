import { Component } from '@angular/core';
import { Scripts, ScriptStore } from './scripts.store';
import { ScriptService } from './script.service';
//import * as System from 'node_modules/systemjs/dist/system.src.js';
//import {System} from '@types/systemjs';
//import * as System from 'systemjs';


declare var System:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ScriptService]
})
export class AppComponent {
  [x: string]: any;
  title = 'app';
  files=['../../dist/module1/out-tsc/app/app.component.js'];

  constructor(private script:ScriptService){
   // this.somfun();
   this.script.load('filepicker','jquery','typings').then(data=>{
    console.log(data[2].reverseString('Reverse String'+'Rahul'));
     console.log(data);
   })

}

//When trying to import bundle file, it doesn't expose components. Just generic stuffs
//However, normal JS file gets imported with all the functions
somfun(){
// System.import('../../dist/sampleModule/main.bundle.js').then(module=>{
//   console.log(module);
//  });

 //working
//  System.import('../../dist/module1/out-tsc/app/app.component').then(module => { 
//        console.log(module.AppComponent.prototype.reverseString('Reverse String'+'Rahul'));
//        console.log(module.AppComponent);
//      console.log(module);
//     });

//TODO:- This can be wrapped into promise and then it can be solved.
//  System.import('../../dist/module1/out-tsc/app/app.component.js').then(module => { 
//        console.log(module.AppComponent.prototype.reverseString('Reverse String'+'Rahul'));
//        console.log(module.AppComponent);
//      console.log(module);
//     });

//  this.files.forEach(element => {
//      return System.import(element).then(module=>{
      
//        console.log(module);
//      }); 
//  })


// System.import('core-js')
//     .then(function(){
//         return System.import('polymer/mutationobservers');
//     })
//     .then(function(){
//         return System.import('aurelia-bootstrapper');
//     }); 
// System.register(['../../dist/module1/out-tsc/app/app.component.js'],function(){
//   var app_comp;
//   return {
//     setter:[
//       function(app_comp_1){
//         app_comp=app_comp_1;
//         console.log(app_comp);
//       }
//     ]
//   }
// })

}


}
