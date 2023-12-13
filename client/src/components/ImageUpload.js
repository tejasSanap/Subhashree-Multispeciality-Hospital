import React from 'react'
import { useState } from 'react';
import { storage } from '../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
function ImageUpload() {

    const [file, setFile] = useState("");
    const [percent,setPercent] = useState(0);
    const [url,setUrl]=useState("");
    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    function handleUpload() {
      if (!file) {
          alert("Please choose a file first!")
      }
      
      const storageRef = ref(storage,`/files/${file.name}` );
      const  uploadTask = uploadBytesResumable(storageRef,file);
      
      uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrl(url);
                console.log(url);
            });
        }
    ); 
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleChange}/>
            <button onClick={handleUpload}  >Upload to Firebase</button>
        </div>
    );
}

export default ImageUpload