import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OnInit} from '@angular/core';
import { IRole } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})

export class Roles implements OnInit {

  rolesList: IRole[] = [];
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    // Logic to retrieve all roles from the backend or service
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any) => {
      this.rolesList = res.data;
    });
  }

}