import { Component, OnInit } from '@angular/core';
import { CaddyService } from '../service/caddy.service';
import {Caddy} from '../../model/caddy.model';

@Component({
  selector: 'app-caddies',
  templateUrl: './caddies.component.html',
  styleUrls: ['./caddies.component.css']
})
export class CaddiesComponent implements OnInit {
  public caddy: Caddy;
  constructor(public caddyService: CaddyService) { }

  ngOnInit() {
   this.caddy = this.caddyService.caddy;
  }

}
