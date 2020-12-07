import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  listBtn = false;
  tagName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listBtn = false;
    this.tagName = location.pathname;
  }

  setListShow() {
    this.listBtn = !this.listBtn;
  }

  routeTag(name) {
    this.router.navigate([`.${name}`]);
    this.tagName = name;
  }
}
