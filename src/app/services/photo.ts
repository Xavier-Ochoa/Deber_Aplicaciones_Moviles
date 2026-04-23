import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

  constructor(private platform: Platform) {}

  // Tomar foto
  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      saveToGallery: true,
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    await Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  // Guardar imagen (WEB + MÓVIL)
  private async savePicture(photo: Photo): Promise<UserPhoto> {

    let base64Data: string | Blob;

    if (this.platform.is('hybrid')) {
      // MÓVIL
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;

    } else {
      // WEB
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      base64Data = await this.convertBlobToBase64(blob) as string;
    }

    const fileName = 'XOchoa_' + new Date().getTime() + '.jpeg';

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (this.platform.is('hybrid')) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  }

  private convertBlobToBase64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  // Cargar fotos
  public async loadSaved() {

    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });

    this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];

    // Solo WEB necesita reconstrucción
    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });

        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }

  // Eliminar foto
  public async deletePicture(photo: UserPhoto, position: number) {
    // Eliminar del filesystem
    await Filesystem.deleteFile({
      path: photo.filepath,
      directory: Directory.Data,
    });

    // Eliminar del array
    this.photos.splice(position, 1);

    // Actualizar storage
    await Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}