import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatAnchor } from "@angular/material/button";
import { HeroInterface } from '../../interfaces/hero-interface';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule, MatAnchor],
  templateUrl: './confirm-dialog.html',
  styles: ``,
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroInterface
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
