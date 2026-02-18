import { UserLanguage, UserRole } from "src/constants/enums"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: 'auths'})
export class Auth {
    @PrimaryGeneratedColumn('uuid')
    id : number

    @Column({ unique : true })
    targetEmail : string

    @Column()
    verificationToken? : string

    @Column()
    name : string

    @Column()
    password : string

    @Column()
    language : UserLanguage

    @Column()
    accepteddAt? : Date

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at'
    })
    createdAt : Date

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at'
    })
    updatedAt? : Date

    @Column()
    deletedAt? : Date
}