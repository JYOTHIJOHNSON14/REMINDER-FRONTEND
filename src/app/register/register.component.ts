// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    var uname = this.registerForm.value.uname
    var uid = this.registerForm.value.uid
    var pswd = this.registerForm.value.pswd

    if (this.registerForm.valid) {
      this.ds.register(uname, uid, pswd)
      .subscribe((result:any)=>{
       if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        
        }

      },
      result=>{
        alert(result.error.message)
      }
      )


    
    }
    
    else {
      alert("invalid Form")
    }
    
  }
}