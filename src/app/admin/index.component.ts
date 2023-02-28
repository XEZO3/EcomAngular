import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  showUserMenu=false
  showRoleMenu=false
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
