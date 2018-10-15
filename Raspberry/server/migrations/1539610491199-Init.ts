import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1539610491199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `temperature` (`id` int NOT NULL AUTO_INCREMENT, `temperature` float(4,2) NOT NULL, `humidity` float(4,2) NOT NULL, `createdDateUTC` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `locationId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `location` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdDateUTC` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `temperature` ADD CONSTRAINT `FK_290f758ca4eeb7574510a46ecd2` FOREIGN KEY (`locationId`) REFERENCES `location`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `temperature` DROP FOREIGN KEY `FK_290f758ca4eeb7574510a46ecd2`");
        await queryRunner.query("DROP TABLE `location`");
        await queryRunner.query("DROP TABLE `temperature`");
    }

}
