import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yeni-sayfa',
  templateUrl: './yeni-sayfa.component.html',
  styleUrls: ['./yeni-sayfa.component.css']
})
export class YeniSayfaComponent implements OnInit {

  private deger;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.deger = this.router.snapshot.paramMap.get("id");
    console.log(this.deger);
  }

}
