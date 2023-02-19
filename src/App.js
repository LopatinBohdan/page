import logo from './logo.svg';
import './App.css';
import { Person } from './page';
import Skills from './components/skills';
import Pet from './components/pet';

export default function App(props) {
  return (
    <div class="info">
      <h1>Task1</h1>
      <img src={props.photo}></img>
      <p>
        name: {props.name};<br></br>
        lastName: {props.lastName};<br></br>
        city: {props.city};<br></br>
        expiriens: {props.expiriens};<br></br>
        <Skills></Skills>
      </p>
      <hr></hr>
      <h1>Task2</h1>
      <img src={props.petPhoto}></img>
      <p>
        petName: {props.petName};<br></br>
        pet: {props.pet};<br></br>
        <Pet></Pet>
      </p>
      <hr></hr>
    </div>
    
  );
}


App.defaultProps={
  name:"Name",
  lastName:"LastName",
  city:"City",
  expiriens:"SomeExpiriens",
  photo:"/img/images.jpg",

  petName:"Pet",
  pet:"Cat",
  petPhoto:"/img/cat.jpg"

}
