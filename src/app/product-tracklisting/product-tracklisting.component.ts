import { Component, OnInit } from '@angular/core';
import { Album } from 'app/album';
import { ProductService } from 'app/product.service';


@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  constructor(private _productService : ProductService) { }

  albumInfo : Album;

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(respose => 
      this.albumInfo = respose
      );
  }

}
