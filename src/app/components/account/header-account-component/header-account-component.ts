import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegisterFormComponent } from '../register-form-component/register-form-component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-account-component',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header-account-component.html',
  styleUrl: './header-account-component.scss',
})
export class HeaderAccountComponent {

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
