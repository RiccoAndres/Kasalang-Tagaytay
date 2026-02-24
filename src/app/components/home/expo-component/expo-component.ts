import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RegisterFormComponent } from '../../account/register-form-component/register-form-component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-expo-component',
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './expo-component.html',
  styleUrl: './expo-component.scss',
})
export class ExpoComponent {
  
  constructor (
    private readonly dialog: MatDialog
  ) {}

  public openForm(): void {
    this.dialog.open(RegisterFormComponent, {
      width: '800px',
      height: '90%'
    });
  }
}
