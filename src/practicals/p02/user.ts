export class User {
    private firstname!: string;
    private lastname!: string;
    private age!: number;

    static BIRTH_YEAR: number = 2000; 

    setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`.trim();
    }
}