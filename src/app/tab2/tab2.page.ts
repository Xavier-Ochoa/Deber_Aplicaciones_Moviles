import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  constructor(
    public photoService: PhotoService,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async addPhotoToGallery() {
    try {
      await this.photoService.addNewToGallery();
      await this.presentToast('Foto capturada exitosamente', 'success');
    } catch (error) {
      await this.presentToast('Error al capturar la foto', 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color,
      icon: color === 'success' ? 'checkmark-circle' : 'close-circle'
    });
    await toast.present();
  }

}