import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CloudinaryModule } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CloudinaryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Image Gallery';
  img!: CloudinaryImage;

  ngOnInit(){

    const cld = new Cloudinary({
      cloud: {
        cloudName: 'demo'
      }
    });

    this.img = cld.image('cld-sample');
    this.img.resize(fill().width(250).height(250));
  }
}
