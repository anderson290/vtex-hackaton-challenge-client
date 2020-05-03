import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  form: FormGroup;
  linksArray: any = [
    {name: 'Amazon', link:'https://www.amazon.com.br/'},
    {name: 'Americanas', link:'https://www.americanas.com.br/'},
    {name: 'Submarino', link:'https://www.submarino.com.br/'},
  ];

  message: string;
  imgURL: any;
  imagePath: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    ) {
    iconRegistry.addSvgIcon(
        'tel',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/tool.svg'));
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name:['', Validators.required],
      photo:[null, Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      knowWebsites: [null, Validators.minLength(1)]
    })
  }

  getItens(item){
    this.form.get('knowWebsites').patchValue(item._value);
  }

  preview(event){
    if (event.length === 0)
      return;
 
    var mimeType = event[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Somente imagens!";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = event;
    reader.readAsDataURL(event[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    console.log(event)
    this.form.get('photo').patchValue(event[0]);
  }

  sendInfos(){
    // console.log(this.form.value);
    this.route.navigate(['/conference']);
  }

}
