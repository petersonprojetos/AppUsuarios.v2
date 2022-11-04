import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from '../../../../services.service';

@Component({
  selector: 'app-novotipousuario',
  templateUrl: './novotipousuario.component.html',
  styleUrls: ['./novotipousuario.component.css']
})
export class NovotipousuarioComponent implements OnInit {
  constructor(private service:ApiserviceService) { }

  errormsg:any;
  sucessmsg:any;

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'dstipousuario': new FormControl('', Validators.required),
    'dsobservacao': new FormControl('', Validators.required),
    'bloqueado': new FormControl('')
  })


  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res==>')
        this.userForm.reset()
        this.sucessmsg = res.message
      })
    }
    else{
      this.errormsg = 'preencha todas as lacunas'
    }
  }

}
