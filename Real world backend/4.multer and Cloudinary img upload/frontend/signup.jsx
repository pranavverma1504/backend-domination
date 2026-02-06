const formData = new FormData();
formData.append("name", "Pranav");
formData.append("email", "pranav@gmail.com");
formData.append("password", "123456");
formData.append("profileImage", file);

axios.post("http://localhost:5000/api/auth/register", formData, {
  headers: { "Content-Type": "multipart/form-data" },
});
// Note:  In multer, the field name in upload.single() should match the key used in formData.append() for the file.

// In this example, "profileImage" is the field name used in both the frontend (formData.append) and the backend (upload.single).

// If you change the field name in the backend, make sure to update it in the frontend as well to ensure the file is correctly processed.

// Example: If you change to upload.single("avatar") in backend, use formData.append("avatar", file) in frontend.

//img ko form data m bhejte h for easy file handling