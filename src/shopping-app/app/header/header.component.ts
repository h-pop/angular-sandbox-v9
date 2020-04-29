import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() menuItemClicked = new EventEmitter<string>();

  collapsed = true;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  // onMenuItemSelected(menuItemNameSelected: string) {
  //   this.menuItemClicked.emit(menuItemNameSelected);
  // }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
