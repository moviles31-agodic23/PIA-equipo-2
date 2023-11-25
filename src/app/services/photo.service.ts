import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences';
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor() { }

  public async addNewToGallery() {
    //Para tomar la foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log(capturedPhoto.webPath);
    this.borrador.unshift({
      filepath: "",
      webviewPath: capturedPhoto.webPath!
    });

    const storage = getStorage();

    const storageRef = ref(storage, 'some-child');
    console.log(this.borrador[0].filepath)
    uploadString(storageRef, capturedPhoto.dataUrl!, 'data_url').then((snapshot) => {
      console.log('Uploaded a data_url string!');
    });

  }

  public async photoUser(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    this.profile.unshift({
      filepath: capturedPhoto.dataUrl!,
      webviewPath: capturedPhoto.webPath!
    });
  }
  
  public borrador: UserPhoto[]=[];
  public profile: UserPhoto[]=[];
  public photos: UserPhoto[]=[];

}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export interface Photo {
  filepath: string;
}
