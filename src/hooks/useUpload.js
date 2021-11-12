import axios from "axios";
import { useState } from "react";

const useUpload = () => {
	const [selectedFile, setSelectedFile
	] = useState([])
	const [uploadProgress,setUploadProgress] = useState('')

	const  fileUploadHandler = () => {
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


	return {
		fileUploadHandler,setSelectedFile,selectedFile
	}


}
export default useUpload;