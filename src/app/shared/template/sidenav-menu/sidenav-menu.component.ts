import { AuthStorageService } from './../../../modules/auth/services/auth-storage.service';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sistema } from '../../models/sistema.model';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  sub: Subscription[] = [];
  sistema: Sistema;
  user: any;
  constructor(private activatedRoute: ActivatedRoute, public authService: AuthStorageService) {}


  ngOnInit() {
    this.sistema = this.activatedRoute.snapshot.data['sistema'];
    console.log(this.authService.getPayload())
  }

}
