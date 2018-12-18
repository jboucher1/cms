import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  success(message: string, actions?: string, config?: MatSnackBarConfig){
    if(!config){
      config = {
        duration:1500,
        horizontalPosition: 'right'
      }
    }
    this.snackbar.open(message, actions, config);
  }
}
