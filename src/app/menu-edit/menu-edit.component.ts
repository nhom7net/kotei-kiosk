import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string; 
}

@Component({
  selector: 'app-menu-edit',
  standalone: true,
  imports: [],
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css'
})

export class MenuEditComponent {
  MenuItems: MenuItem[] = [
    { id: 1, name: 'Rau muống xào tỏi', price: 20000, category:'Món chính'},
    { id: 2, name: 'Cơm chiên', price: 25000, category:'Món chính'},
    { id: 3, name: 'Rau muống luộc', price: 30000, category:'Món chính'},
    { id: 4, name: 'Thịt kho', price: 10000, category:'Món chính'},
    { id: 5, name: 'Gà kho', price: 40000, category:'Món chính'},
    { id: 1, name: 'Rau muống xào tỏi', price: 20000, category:'Món chính'},
    { id: 2, name: 'Cơm chiên', price: 25000, category:'Món chính'},
    { id: 3, name: 'Rau muống luộc', price: 30000, category:'Món chính'},
    { id: 4, name: 'Thịt kho', price: 10000, category:'Món chính'},
    { id: 5, name: 'Gà kho', price: 40000, category:'Món chính'},
  ];
  
  MenuItemsToAdd!: any; 
  newMenuItemPrice!: number;
  newMenuItemCategory!: string;

  constructor() {}

  addMenuItem(): void {
    // Tạo một món ăn mới với thông tin từ newMenuItemName và các giá trị mặc định khác
    const newMenuItem: MenuItem = {
      id: this.MenuItems.length + 1, // Tạm thời sử dụng độ dài danh sách MenuItems để tạo ID mới
      name: this.MenuItemsToAdd,
      price: 0, // Bạn có thể cập nhật giá tiền tùy theo yêu cầu
      category: 'Món mới' // Hoặc cung cấp một cách để người dùng chọn danh mục
    };

    // Thêm món ăn mới vào danh sách MenuItems
    this.MenuItems.push(newMenuItem);

    // Sau khi thêm, reset trường nhập liệu để chuẩn bị cho món ăn tiếp theo
    this.MenuItemsToAdd = '';

    // Hiển thị thông báo thành công (có thể thay đổi theo yêu cầu)
    alert(`Đã thêm món ${newMenuItem.name} vào danh sách.`);

    // Có thể thực hiện các xử lý khác sau khi thêm món ăn, như lưu vào cơ sở dữ liệu, cập nhật giao diện, v.v.
  }
  saveMenuItem(): void {
    // Logic để lưu sửa đổi món ăn
    // Bạn có thể thêm logic để cập nhật một món ăn đã có trong MenuItems
    alert('Lưu sửa đổi thành công.');
  }
  deleteMenuItem(): void {
    // Logic để xoá món ăn
    // Bạn có thể thêm logic để xoá một món ăn cụ thể từ MenuItems
    alert('Đã xoá món ăn.');
  }
}
