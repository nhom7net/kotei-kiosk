import { Migration } from '@mikro-orm/migrations';

export class Migration20240626093721 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `menu` (`id` integer not null primary key autoincrement, `name` text not null, `price` integer not null);');

    this.addSql('create table `order_items` (`id` integer not null primary key autoincrement, `order_id` integer not null, `menu_id` integer not null, `quantity` integer not null);');

    this.addSql('create table `orders` (`id` integer not null primary key autoincrement, `table` integer not null, `start_time` datetime not null);');

    this.addSql('create table `table` (`id` integer not null primary key autoincrement, `display_name` text not null, `status` integer not null, `order_id` integer not null);');

    this.addSql('create table `vouchers` (`id` integer not null primary key autoincrement, `code` text not null, `display_name` text not null, `amount` integer not null);');
  }

}
