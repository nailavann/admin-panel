import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../services/api/image.service";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.getImages().subscribe((response) => {
      console.log(response);
    });
  }


}
