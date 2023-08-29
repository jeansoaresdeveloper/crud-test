import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/service/person/person.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit{

    constructor(
        private service: PersonService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {}

    delete(): void
    {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.delete(parseInt(id!)).subscribe(() => {
            this.router.navigate(['/list-people'])
        });
    }

    cancel(): void
    {
        this.router.navigate(['/list-people'])
    }

}
