import { Migration } from '@mikro-orm/migrations';

export class Migration20240626155302 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `menu` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `name` text not null, `price` integer not null);');

    this.addSql('create table `table` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `display_name` text not null, `status` integer not null, `order_id` integer not null, constraint `table_order_id_foreign` foreign key(`order_id`) references `orders`(`id`) on update cascade);');
    this.addSql('create unique index `table_order_id_unique` on `table` (`order_id`);');

    this.addSql('create table `orders` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `table_id` integer not null, `start_time` datetime not null, constraint `orders_table_id_foreign` foreign key(`table_id`) references `table`(`id`) on update cascade);');
    this.addSql('create unique index `orders_table_id_unique` on `orders` (`table_id`);');

    this.addSql('create table `order_items` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `order_id` integer not null, `menu_id` integer not null, `quantity` integer not null, constraint `order_items_order_id_foreign` foreign key(`order_id`) references `orders`(`id`) on update cascade, constraint `order_items_menu_id_foreign` foreign key(`menu_id`) references `menu`(`id`) on update cascade);');
    this.addSql('create unique index `order_items_order_id_unique` on `order_items` (`order_id`);');
    this.addSql('create unique index `order_items_menu_id_unique` on `order_items` (`menu_id`);');

    this.addSql('create table `vouchers` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `code` text not null, `display_name` text not null, `amount` integer not null);');
  }

}
