/**
 * PROJECT DATA
 * =============
 * This is the ONLY file you need to edit to add or update portfolio work.
 *
 * For each project, fill in:
 *   title        - Project name shown on the card
 *   category     - Must be one of: "Photography", "Graphic Design", "Photo Editing", "Video", "Social Media"
 *   description  - One or two short sentences about the project
 *   thumbnail    - A direct image URL (see notes below), or leave as "" to use a placeholder
 *   link         - The Google Drive folder or file link for this specific project
 *
 * GETTING A THUMBNAIL IMAGE URL FROM GOOGLE DRIVE:
 *   1. Open the image file in Google Drive.
 *   2. Right-click it and choose "Share" > make sure "Anyone with the link" can view.
 *   3. Copy the file ID from the share link, e.g. drive.google.com/file/d/FILE_ID_HERE/view
 *   4. Use this format as your thumbnail URL:
 *      https://drive.google.com/thumbnail?id=FILE_ID_HERE&sz=w800
 *   (Simpler option: upload your thumbnails to the /assets/images folder in this project
 *   instead, and just point "thumbnail" at "assets/images/yourfile.jpg".)
 *
 * GETTING A PROJECT LINK:
 *   Right-click the project's folder or file in Drive > Share > "Anyone with the link"
 *   (viewer access) > Copy link. Paste that as "link" below.
 *
 * The placeholder entries below are examples only — replace title, description,
 * thumbnail and link with your real work before publishing.
 */

const PROJECT_CATEGORIES = [
  "Photography",
  "Graphic Design",
  "Photo Editing",
  "Video",
  "Social Media"
];

// Fallback link used whenever a project doesn't have its own specific link yet.
const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/10MPwTCo8OYndREM23wXDhS59uN2Uf6fG?usp=drive_link";

const PROJECTS = [
  {
    title: "Wedding Photography",
    category: "Photography",
    description: "Photography Projects",
    thumbnail: "assets/images/Wedding.jpg",
    link: https://drive.google.com/drive/folders/1l8QuS6MtcQySNgDxhVkqi2HPt8XkUe2M?usp=drive_link
  },
  {
    title: "Product Shoot",
    category: "Photography",
    description: "e-commerce product shoot.",
    thumbnail: "assets/images/Product.jpg",
    link: https://drive.google.com/drive/folders/1QN4LUxKdV1KbCQYFggAADDfpwXzhOsZ5?usp=drive_link
  },
  {
    title: "Brand Identity",
    category: "Graphic Design",
    description: "Branding is the KEY",
    thumbnail: "assets/images/brand.jpg",
    link: https://drive.google.com/drive/folders/1TfxMjz38tgeCugisog4aYMyQrGr-aNXe?usp=drive_link
  },
  {
    title: "Social Media Creatives",
    category: "Graphic Design",
    description: "CREATIVES for Social Media is a BIG GAME",
    thumbnail: "assets/images/socialmedia.jpg",
    link: https://drive.google.com/drive/folders/1pXJyNYh0CVweDTDQGdyc6YW5FsHKqScr?usp=drive_link
  },
  {
    title: "Retouching Series",
    category: "Photo Editing",
    description: "Retouching the RAW's",
    thumbnail: "assets/images/retouching.jpg",
    link: https://drive.google.com/drive/folders/1YTiaYSrpf9kxDwJSGwsPjxbnBs5v9hdd?usp=drive_link
  },
  {
    title: "Social Media Highlight Reels",
    category: "Video",
    description: "Reels & Videos are HOOK POINT for Auidence to grow A BRAND",
    thumbnail: "assets/images/reels.jpg",
    link: https://drive.google.com/drive/folders/1zvNs_hWqHcsfHh4bKXEHL8DYbcLjR9i-?usp=drive_link
  },
  {
    title: "AI IMAGES from scratch to FINAL OUTPUT",
    category: "Social Media",
    description: "AI + Prompt Plays an Important role here, also HELPS Us too.",
    thumbnail: "assets/images/campaign.jpg",
    link: https://drive.google.com/drive/folders/1AlDaBjvvp4145xgffTHRbvW1BcywsRbI?usp=drive_link
  }
];
