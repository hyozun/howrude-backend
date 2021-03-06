import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'kakao_place_id' })
  kakaoPlaceId: number;

  @Column()
  name: string;

  @Column({ name: 'address_name' })
  addressName: string;

  @Column()
  description: string;
}
