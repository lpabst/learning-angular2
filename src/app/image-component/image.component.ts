import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-image',
    template: '<div class="thumbnail"><img style="width: 100%; height: auto;" src={{imageUrl}} alt="list of pics" /></div>',
    styles: [
        `
            .thumbnail{
                width: 400px;
                height: 400px;
            }
        `
    ]
})
export class ImageComponent{
    @Input() imageUrl;
}