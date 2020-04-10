import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  state = { loading: true };

  /* //replace with babel
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }*/
  //only run once when the class first got created
  componentDidMount() {
    //throw new Error("lol");
    //receives {animal} from api
    pet.animal(+this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading... </h1>;
    }
    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
//export default Details;

export default function DetailsWithErrorBoundary(props) {
  //not sure why returns ...props, but it has something to do with the
  //props data needs to be passed to details

  return (
    <ErrorBoundary>
      <Details {...props}></Details>
    </ErrorBoundary>
  );
}

/*
const Details = (props) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};*/