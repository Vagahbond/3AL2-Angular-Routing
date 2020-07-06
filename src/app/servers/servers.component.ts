import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ParamMap,  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  
  goToUsersURL() {
    this.router.navigate(['/users'], { relativeTo: this.route });
  }

  reloadCurrentPath() {
    this.router.navigate(['../servers'], { relativeTo: this.route });
  }
}
