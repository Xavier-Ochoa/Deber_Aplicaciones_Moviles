import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo';
import { ActionSheetController, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {

  selectedPhoto: UserPhoto | null = null;

  constructor(
    public photoService: PhotoService,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async ionViewWillEnter() {
    await this.photoService.loadSaved();
  }

  async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Qué deseas hacer?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deletePicture(photo, position);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async deletePicture(photo: UserPhoto, position: number) {
    try {
      await this.photoService.deletePicture(photo, position);
      await this.presentToast('Foto eliminada', 'success');
    } catch (error) {
      await this.presentToast('Error al eliminar la foto', 'danger');
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

  openFullscreen(photo: UserPhoto) {
    this.selectedPhoto = photo;
  }

  closeFullscreen() {
    this.selectedPhoto = null;
  }

}