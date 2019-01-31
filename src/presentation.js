// Import React
import React from "react";
import styled from "react-emotion";
import ImageSlide from "spectacle-image-slide";

import StartCat from "./images/sstart.gif";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  CodePane,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import JSONExample from "./examples/JSON";
import JSONAvatar from "./images/avatar.jpg";

const UserCard = ({ user }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      backgroundImage: gradient,
      padding: "2em",
      borderRadius: "1em"
    }}
  >
    <div
      style={{
        flexShrink: 0,
        borderRadius: "100vw",
        overflow: "hidden"
      }}
    >
      <img style={{ display: "block" }} src={JSONAvatar} />
    </div>
    <div style={{ width: "100%", padding: "0 2em" }}>
      <Heading size={6} textColor="primary" fit>
        {user.name} {user.surname}
      </Heading>
      <Text
        textColor="primary"
        textFont="secondary"
        textAlign="left"
        style={{ opacity: 0.75 }}
      >
        @{user.nickname} - <span>Age: {user.age}</span>
      </Text>
      <Text textColor="primary" textAlign="left">
        Likes:
        {user.hobbies.map(hobbie => (
          <Code
            textColor="primary"
            style={{ background: "rgba(0,0,0,0.2)", margin: "0.25em" }}
            key={hobbie}
          >
            {hobbie}
          </Code>
        ))}
      </Text>
    </div>
  </div>
);

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#222d3a",
    quartenary: "#CECECE"
  },
  {
    primary: {
      name: "Signika",
      googleFont: true,
      styles: ["700 "]
    },
    secondary: {
      name: "Inconsolata",
      googleFont: true,
      styles: ["700 "]
    }
  }
);

const gradient = "linear-gradient(45deg,#8496ca,#610f3c)";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgGradient={gradient}>
          <Heading textColor="primary" size={1} textAlign="left" lineHeight={1}>
            Lost in translation
          </Heading>
          <Text
            textFont="secondary"
            margin="20px 0 0"
            fit
            textColor="tertiary"
            size={1}
            secondary
          >
            Davide Di Pumpo - Bologna Frontend Gennaio 2019
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading textAlign="left" size={5} textFont="secondary">
            Vedremo insieme come progettare componenti stateless, collegati
            attraverso HOC a uno statemanager tipizzato in un app polimartica
            che gestisce le sue rotte attraverso un prouder client.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <iframe
            width="800"
            height="600"
            src="https://www.youtube.com/embed/thb8Ov_bW_o"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Slide>
        <Slide transition={["spin"]}>
          <Heading size={1} fit>
            Supercazzola
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="primary" caps>
            Perché?
          </Heading>
        </Slide>
        <Slide bgGradient={gradient} transition={["spin"]}>
          <Quote textAlign="left">Design is thinking made visual</Quote>
          <Cite textAlign="left">Saul Bass</Cite>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} fit>
            <div>
              Pensiero&nbsp;&nbsp;
              <Appear>
                <span>==</span>
              </Appear>
              => &nbsp;&nbsp;&nbsp;&nbsp;Visual
            </div>
          </Heading>
        </Slide>
        <Slide bgGradient={gradient}>
          <Heading size={1} fit textColor="primary">
            Postfordismo
          </Heading>
          <Text fit textFont="secondary">
            Ho sempre sognato di usare questa parola in un talk
          </Text>
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading size={1} fit textColor="primary">
            Pantoni
          </Heading>
        </Slide>
        <Slide bgColor="secondary" transition={["fade"]}>
          <Heading size={1} textAlign="left" textColor="white">
            Ma non ci sono solo persone nel nostro processo
          </Heading>
          <Text textFont="secondary" textAlign="left" textColor="white">
            Le macchine prenderanno il nostro posto un giorno
          </Text>
        </Slide>
        <Slide bgGradient={gradient}>
          <ImageSlide image={StartCat} title="Let's start meow" />
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading size={1} textColor="primary">
            JSON
          </Heading>
        </Slide>
        <Slide>
          <BlockQuote size={1}>
            JSON (JavaScript Object Notation) is a lightweight data-interchange
            format. It is easy for humans to read and write. It is easy for
            machines to parse and generate.
          </BlockQuote>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            textSize={30}
            source={JSON.stringify(require("./examples/JSON").default, null, 2)}
          />
        </Slide>
        <Slide>
          <UserCard user={JSONExample} />
        </Slide>
        <Slide>
          <div
            style={{
              maxHeight: "60vh",
              overflow: "scroll",
              width: "120%"
            }}
          >
            <CodePane
              textSize={20}
              lang="javascript"
              source={JSON.stringify(
                require("./examples/design.config").default,
                null,
                2
              )}
            />
          </div>
        </Slide>
        <Slide>
          <ImageSlide image={require("./images/credimichange.gif")} />
        </Slide>
        <Slide>
          <Heading fit>
            <Code>Take away concept: </Code>
            <Text>Single source of truth</Text>
          </Heading>
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading size={1} textColor="primary">
            Tipi, GraphQL e altri animali fantastici
          </Heading>
        </Slide>
        <Slide>
          <CodePane
            textSize={40}
            lang="graphql"
            source={`
    type User {
      name: String!
      surname: String!
      nickname: String
      avatar: Uri
      age: Number
      hobbies: [String]
    }

`}
          />
        </Slide>
        <Slide>
          <CodePane
            textSize={40}
            lang="graphql"
            source={`
    type Dashboard {
      user: User!
      widgets: [Widget]!
    }

`}
          />
        </Slide>
        <Slide>
          <img
            style={{ maxWidth: "100%" }}
            src={require("./images/graphiql.gif")}
          />
        </Slide>
        <Slide>
          <ImageSlide
            image={require("./images/graphqlosketch.jpg")}
            title="GraphQL x Sketch"
          />
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading size={1} textColor="primary">
            Componenti
          </Heading>
        </Slide>
        <Slide>
          <Text textAlign="left">
            Web components are a set of web platform APIs that allow you to
            create new custom, reusable, encapsulated HTML tags to use in web
            pages and web apps.
          </Text>
        </Slide>
        <Slide>
          <Heading textAlign="left" size={3}>
            Ma non parliamo di tecnologia
          </Heading>
        </Slide>
        <Slide>
          <select>
            <option>Prima opzione</option>
            <option>Seconda opzione</option>
            <option>Terza opzione</option>
          </select>
        </Slide>
        <Slide>
          <img src={require("./images/cat.gif")} />
        </Slide>
        <Slide>
          <img src={require("./images/components.png")} />
        </Slide>
        <Slide>
          <CodePane textSize={40} source="  <UserCard user={JSONExample} />" />
          <br />
          <UserCard user={JSONExample} />
        </Slide>
        <Slide>
          <div
            style={{
              maxHeight: "60vh",
              overflow: "scroll",
              width: "120%"
            }}
          >
            <CodePane
              textSize={20}
              source={`
  <div>
    <div>
      <img style={{ display: "block" }} src={user.avatar} />
    </div>
    <div style={{ width: "100%", padding: "0 2em" }}>
      <Heading size={6} textColor="primary" fit>
        {user.name} {user.surname}
      </Heading>
      <Text
        textColor="primary"
        textFont="secondary"
        textAlign="left"
        style={{ opacity: 0.75 }}
      >
        @{user.nickname} - <span>Age: {user.age}</span>
      </Text>
      <Text textColor="primary" textAlign="left">
        Likes:
        {user.hobbies.map(hobbie => (
          <Code
            textColor="primary"
            style={{ background: "rgba(0,0,0,0.2)", margin: "0.25em" }}
            key={hobbie}
          >
            {hobbie}
          </Code>
        ))}
      </Text>
    </div>
  </div>
`}
            />
          </div>
        </Slide>
        <Slide>
          <Heading lineHeight={1.4} size={3}>
            Un componente altri non è che quello che in{" "}
            <Code textSize={72}>Sketch</Code> chiamiamo{" "}
            <Code textSize={72}>Symbol</Code> o che in{" "}
            <Code textSize={72}>Framer X</Code> chiamiamo...{" "}
            <Code textSize={72}>Component</Code>
          </Heading>
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading textAlign="left" size={1} textColor="primary">
            Due ultime paroline sugli attributi/proprietà di un componente
          </Heading>
          <br />
          <Text textAlign="left" textFont="secondary">
            Si, lo so che sono differenti, le unisco per onore di brevità
          </Text>
        </Slide>
        <Slide>
          Dopo un'esempietto con framer per farvi capire che intendo
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading size={1} textColor="primary">
            Stato
          </Heading>
        </Slide>
        <Slide>
          <div>
            <Heading fit>(Quasi) ogni componente ha tre stati</Heading>
            <br />
            <Appear>
              <Code>Loading</Code>
            </Appear>
            <br />
            <br />
            <Appear>
              <Code>Error</Code>
            </Appear>
            <br />
            <br />
            <Appear>
              <Code>Ready</Code>
            </Appear>
          </div>
        </Slide>
        <Slide>
          <Heading size={3}>
            Senza contare lo stato generale della vostra App
          </Heading>
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading size={1} textColor="primary">
            Tools
          </Heading>
        </Slide>
        <Slide>
          <ImageSlide
            image={require("./images/credimistorybook.gif")}
            title="Storybook"
          />
        </Slide>
        <Slide>
          <img src={require("./images/knobs.gif")} />
        </Slide>
        <Slide>
          <ImageSlide
            image={require("./images/backstop.gif")}
            title="BackstopJS"
          />
        </Slide>
        <Slide>
          <ImageSlide image={require("./images/framer.gif")} title="Framer X" />
        </Slide>
        <Slide bgGradient={gradient} transition={["fade"]}>
          <Heading size={1} textColor="primary">
            RECAP
          </Heading>
        </Slide>
        <Slide>
          <Text>
            Definite un linguaggio comune, parlate la stessa lingua dei vostri
            interlocutori, JSON e i Tipi non sono poi così male anche per le
            macchine
          </Text>
        </Slide>
        <Slide>
          <Text>
            Partire dal visual per definire come si comporta un oggetto, crea
            dei buchi d'informazione.
          </Text>
        </Slide>
        <Slide>
          <img
            style={{ maxWidth: "100%" }}
            src={require("./images/zeplin.png")}
          />
        </Slide>
        <Slide>
          <Text>
            Trovate un flusso di lavoro per il quale non dobbiate mantenere più
            "source of truth" contemporaneamente
          </Text>
        </Slide>
        <Slide>
          <Text>Comunicate, Comunicate, Comunicate!</Text>
        </Slide>
        <Slide>
          <ImageSlide
            image={require("./images/thankyou.gif")}
            title="thankyou"
          />
        </Slide>
        <Slide>
          <div style={{ width: "120%;", overflow: "scroll" }}>
            <CodePane
              style={{ width: "150%" }}
              lang="javascript"
              textSize={28}
              source={JSON.stringify(
                {
                  me: "Davide Di Pumpo aka @makhbeth",
                  talk: "Come fosse Gestalt, con redux a destra",
                  works: "Credimi",
                  url: "https://github.com/MakhBeth/Talks/",
                  thanks: ["Paul", "Gerry", "Velia", "Elle"]
                },
                null,
                2
              )}
            />
          </div>
        </Slide>
      </Deck>
    );
  }
}
