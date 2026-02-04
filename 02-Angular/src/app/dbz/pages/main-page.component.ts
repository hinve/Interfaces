import { Component } from '@angular/core';
import { DBZService } from '../sevices/dbz-service';

@Component({
    selector: 'app-dbz-main',
    templateUrl: 'main-page.component.html',
    standalone: false
})

export class MainPageComponent {
    constructor(public dbzservice: DBZService) {}
}