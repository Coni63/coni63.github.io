import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataModel } from '../../interface/data-model';
import { SingleDataComponent } from '../single-data/single-data.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [PdfViewerModule, SingleDataComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  pdfSrc: string;
  current_page: number = 1;
  data: DataModel[] = [];

  constructor(private dataServiceService: DataServiceService) {
    this.pdfSrc = '';
  }

  ngOnInit(): void {
    this.pdfSrc = this.dataServiceService.getPDF();
    this.data = this.dataServiceService.getData();
  }

  update_page(targetPage: number){
    this.current_page = targetPage;
  }

  editItem(newItem: DataModel){
    console.log(newItem);
  }

}
