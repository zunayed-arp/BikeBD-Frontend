
import axios from 'axios';
import React, { useRef, useState } from 'react';

const UploadImage = () => {
	const [selectedFile, setSelectedFile
	] = useState([])

	const fileInput = useRef()

	const fileSelectedHandler = e => {
		// console.log(e.target.files[0]);
		setSelectedFile(e.target.files[0])
	}
	const handleFileRef = () => {
		console.log('clicked  inside file ref')
		console.log(fileInput.current)
		// fileSelectedHandler();
	}


	const fileUploadHandler = () => {
		console.log('clicked')
		const url = `https://api.imgbb.com/1/upload?expiration=600&key=574fe017849709c693c9e21a6cbf42e8`;
		const fd = new FormData();
		fd.append('image', selectedFile, selectedFile.name)
		axios.post(url, fd, {
			onUploadProgress: progressEvent => {
				console.log('Upload Progress: ' + Math.round((progressEvent.loaded) / (progressEvent.total) * 100) + '%')
			}
		})
			.then(res => {
				console.log(res);
			})


	}
	return (
		<div className="mt-5 pt-5">
			<h1>File Upload</h1>
			<input ref={fileInput}
				style={{ display: 'none' }} type="file" onChange={fileSelectedHandler} />
			<button

				onClick={handleFileRef}>Pick File</button>
			<button onClick={fileUploadHandler}>Upload</button>



			<form>
				<div class="form-group">
					<label for="exampleFormControlFile1">Example file input</label>
					<input type="file" class="form-control-file" id="exampleFormControlFile1"/>
				</div>
			</form>


		</div>



	);
};

export default UploadImage;