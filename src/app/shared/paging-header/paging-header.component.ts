import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.css']
})
export class PagingHeaderComponent {
  @Input() pageNumber?: number | undefined;
  @Input() totalCount?: number | undefined;
  @Input() pageSize?: number | undefined;

}
