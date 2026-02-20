export class OnlineCourse {
  public courseName: string;
  public maxStudents: number;
  private enrolledStudents: number = 0;
  private isOpen: boolean = true;

  constructor(courseName: string, maxStudents: number) {
    this.courseName = courseName;
    this.maxStudents = maxStudents;
  }

  public enroll(): boolean {
    if (this.canEnroll()) {
      this.enrolledStudents++;
      return true;
    }
    return false;
  }

  public closeCourse(): void {
    this.isOpen = false;
  }

  public getAvailableSeats(): number {
    return this.maxStudents - this.enrolledStudents;
  }

  public getCourseStatus(): string {
    return this.isOpen ? "Open" : "Closed";
  }

  private canEnroll(): boolean {
    return this.isOpen && this.enrolledStudents < this.maxStudents;
  }
}