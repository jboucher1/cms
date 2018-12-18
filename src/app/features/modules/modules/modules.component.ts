import { SnackbarService } from './../../../services/snackbar/snackbar.service';
import { ModulesService } from './../../../services/modules/modules.service';
import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { map } from 'lodash';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements AfterViewInit {

  params: Object;
  modules: app.Module[];
  canSave: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private moduleService: ModulesService, private snackBar: SnackbarService) { }

  ngOnInit(): void {
    this.modules = this.moduleService.getModules()
  }

  ngAfterViewInit(): void {
    this.route.parent.parent.params.subscribe((params) => this.params = params);

  }

  getModules() {
    return this.moduleService.getModules()
  }

  drop(event: CdkDragDrop<string[]>) {
    if(event.previousIndex === event.currentIndex) return;

    moveItemInArray(this.modules, event.previousIndex, event.currentIndex);
    map(this.modules, (mod, i) => mod.order = i);
    this.canSave = true;
  }

  saveOrdering(){
    this.snackBar.success('Ordering Saved!');
    this.canSave = false;
  }

  activeRoute(module_) {
    let url = `${module_.type}/${module_.id}`
    return this.router.url.indexOf(url) !== -1;
  }

}
