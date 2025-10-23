import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // ✅ HttpClientModule
import { ConsumerService } from '../consumer-service';

@Component({
  selector: 'app-consumer-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // ✅ এখানে add করতে হবে
  templateUrl: './consumer-profile.html',
  styleUrls: ['./consumer-profile.css']
})
export class ConsumerProfile {
 


  //===========================
  // name = '';
  // email = '';
  // password = '';
  // phone = '';
  // photo: File | null = null;
  // loading = false;

  // constructor(private consumerService: ConsumerService) { }

  // onFileSelected(event: any) {
  //   this.photo = event.target.files[0];
  // }

  // saveUser() {
  //   if (!this.name || !this.email || !this.password) {
  //     alert('Please fill all required fields!');
  //     return;
  //   }

  //   this.loading = true;
  //   const formData = new FormData();
  //   formData.append('name', this.name);
  //   formData.append('email', this.email);
  //   formData.append('password', this.password);
  //   formData.append('phone', this.phone);
  //   if (this.photo) formData.append('photo', this.photo);

  //   this.consumerService.saveUser(formData).subscribe({
  //     next: (res) => {
  //       alert('✅ User registered successfully!');
  //       this.resetForm();
  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       alert('❌ Failed to register user!');
  //       this.loading = false;
  //     }
  //   });
  // }

  // resetForm() {
  //   this.name = '';
  //   this.email = '';
  //   this.password = '';
  //   this.phone = '';
  //   this.photo = null;
  // }
}
