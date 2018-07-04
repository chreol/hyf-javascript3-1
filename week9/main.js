class Movie {
  constructor(title, director) {
      this.title = title;
      this.director = director;
      this.star = [];
      this.writer = [];
  }
  getTitle() {
    return this.title;
    // console.log(this.title);
  }
  getDirector() {
    return this.director;
    // console.log(this.director);
  }
  addWriter(writer) {
    this.writer.push(writer);
    // console.log(this.writer);
  }
  getWriters() {
    return this.writer;
  }
  addStar(star) {
    this.star.push(star);
    // console.log(this.star);
  }
  getStars() {
    return this.star;
  }
  renderMovie() {
    let title = document.createElement('h1');
    document.body.appendChild(title);
    title.innerHTML = this.title;

    let director = document.createElement('h3');
    document.body.appendChild(director);
    director.innerHTML = `Director: ${this.getDirector()}`;

    let writers = document.createElement('h3');
    document.body.appendChild(writers);
    writers.innerHTML = `Writers: ${this.getWriters()}`;

    let stars = document.createElement('h2');
    document.body.appendChild(stars);
    stars.innerHTML = `${this.getStars().map(actor => actor.renderStuff())}`;
  }
}
 
class StaffMember {
  constructor(name, role, dateOfBirth) {
    this.name = name;
    this.role = role;
    this.dateOfBirth = dateOfBirth;
  }
  getName() {
    // console.log(this.name);
    return this.name;
  }
  getRole() {
    // console.log(this.role);/
    return this.role;
  }
  getAge() {
    // console.log(2018 - this.dateOfBirth);
    let currentYear = 2018;
    return currentYear - this.dateOfBirth;
  }
  renderStuff() {
    let staffName = document.createElement('h1');
    document.body.appendChild(staffName);
    staffName.innerHTML = `Actor: ${this.name}`;

    let staffRole = document.createElement('h2');
    document.body.appendChild(staffRole);
    staffRole.innerHTML = `Role: ${this.role}`;

    let staffYear = document.createElement('h3');
    document.body.appendChild(staffYear);
    staffYear.innerHTML = `${this.getAge()} years old`;
  }
}

const starWarsTheLastGedi = new Movie('Star Wars: Episode VIII - The Last Jedi', 'Rian Johnson');

const DaisyRidley = new StaffMember('Daisy Ridley', 'Rey', 1992);
const JohnBoyega = new StaffMember('John Boyega', 'Finn', 1992);
const MarkHamill = new StaffMember('Mark Hamill', 'Luke Skywalker / Dobbu Scay', 1951);

starWarsTheLastGedi.addWriter('Rian Johnson');
starWarsTheLastGedi.addWriter('George Lucas');

starWarsTheLastGedi.addStar(DaisyRidley);
starWarsTheLastGedi.addStar(JohnBoyega);
starWarsTheLastGedi.addStar(MarkHamill);

// MarkHamill.renderStuff();
starWarsTheLastGedi.renderMovie();





















// // Pick your favorite movie from http://www.imdb.com/
 
// const myMovie = new Movie('Titanic', 'Kameron');
 
// const firstActor = new StaffMember('Dicaprio', 'drama', 1978);
// myMovie.addStar(firstActor);
// // create and add more staff members
 
// // Make sure that the following actions work.
// console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
// const director = myMovie.getDirector();
// console.log(`Director: ${director.getName()}`);