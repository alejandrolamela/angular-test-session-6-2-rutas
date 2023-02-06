import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit{

    // Declaramos la variable id , le decimso que no es obligatoria con el signo de ? y de tipo any

    id?: any = '';
    // Ahora con este constructor podremos recoger el id que queramos
  
    constructor(private activatedRoute: ActivatedRoute){
  
    }
  
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params=> {
        console.log(params);
        this.id = params.get('id');
      })
    }

}
