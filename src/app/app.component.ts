import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, ';
  name = '';
  items = [
    'https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg',
    'https://katesinghsite.files.wordpress.com/2018/04/pexels-photo-2.jpg',
    'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--wdwKyp4bQqRKv1DoImPR_Uaowg3aiYSd1K0luWcfIMg5xOegg'
  ];

  sliderLeftPos = 0;
  movePics(buttonClicked){
    if (buttonClicked === 'back' && this.sliderLeftPos < 0){
      this.sliderLeftPos += 400;
    }else if (buttonClicked === 'next' && this.sliderLeftPos > (-400*(this.items.length-1))){
      this.sliderLeftPos -= 400;
    }
  }
  getStyle(){
    return this.sliderLeftPos + 'px';
  }
}
