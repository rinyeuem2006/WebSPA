import { mockUsers, mockSettings } from "./mockData.js";
export async function getUser() {
  console.log(" Dang lay du lieu nguoi dung tu mock data ");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500);
  });
}
export async function getSettings() {
  console.log(" Dang lay du lieu cau hinh tu mock data ");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSettings);
    }, 200);
  });
}
