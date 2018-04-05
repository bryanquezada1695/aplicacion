import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ClientesPage } from '../clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private base64Image : string;
	constructor(public navCtrl: NavController, 
				private camera: Camera,
				public http: HttpClient) {
	}

	takePicture(){
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
		  	mediaType: this.camera.MediaType.PICTURE
		  }

		  this.camera.getPicture(options).then((imageData) => {
			 // imageData is either a base64 encoded string or a file URI
			 // If it's base64:
			 this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		 // Handle error
		 });

	}
	openCamera(){
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
		  	mediaType: this.camera.MediaType.PICTURE
		  }

		  this.camera.getPicture(options).then((imageData) => {
			 // imageData is either a base64 encoded string or a file URI
			 // If it's base64:
			 this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		 // Handle error
		 });

	}

	openGallery(){
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
		  	mediaType: this.camera.MediaType.PICTURE,
		  	sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
		  }

		  this.camera.getPicture(options).then((imageData) => {
			 // imageData is either a base64 encoded string or a file URI
			 // If it's base64:
			 this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		 // Handle error
		 });

	}

	uploadImage(){
		let url = 'https://direccion de json';
		let postData = new FormData();
		postData.append('file', this.base64Image);
		let data: Observable<any> = this.http.post(url, postData);
		data.subscribe((result) => {
			console.log(result);
		});
	}

	goToClientesPage(){
	this.navCtrl.push( ClientesPage );
	}

}
