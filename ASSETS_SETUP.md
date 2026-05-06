# Portfolio Assets Setup Guide

## 📸 Adding Your Photo

1. **Replace the avatar image:**
   - Go to `client/public/assets/avatar.png`
   - Replace with your professional photo (recommended size: 400x400px)
   - Keep the filename as `avatar.png`

2. **Supported formats:** PNG, JPG, JPEG, GIF, WebP

## 📄 Adding Your Resume

1. **Replace the resume file:**
   - Go to `client/public/assets/resume.pdf`
   - Replace with your actual resume PDF file
   - Keep the filename as `resume.pdf`

2. **Resume download features:**
   - Available in Hero section (main call-to-action)
   - Also available in Contact section
   - Downloads with filename: `Prashant_Tripathi_Resume.pdf`

## 🎨 Image Guidelines

- **Avatar:** Square aspect ratio, professional headshot
- **Quality:** High resolution but optimized for web (under 500KB recommended)
- **Background:** Plain or transparent background works best

## 📋 Resume Guidelines

- **Format:** PDF only
- **File size:** Under 5MB recommended
- **Content:** Keep it professional and up-to-date
- **Naming:** Will download as "Prashant_Tripathi_Resume.pdf"

## 🚀 After Adding Files

1. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Test the resume download buttons
3. Verify your photo displays correctly in the About section

## 📂 File Structure

```
client/public/assets/
├── avatar.png      # Your professional photo
└── resume.pdf      # Your resume PDF
```