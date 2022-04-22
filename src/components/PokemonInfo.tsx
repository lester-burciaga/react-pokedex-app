import { Pokemon } from "../types/types";

function PokemonInfo(props: { data?: Pokemon }) {
  return (
    <>
      {!props.data ? (
        ""
      ) : (
        <>
          <h1 className="infoName">{props.data.name}</h1>
          <img
            src={props.data.image}
            height={200}
            width={200}
            className="infoImage"
            alt={props.data.name}
          />
          <div className="abilities">
            {props.data.abilities.map((poke, index) => {
              return (
                <div
                  className={`group ${props.data?.types[0].type}`}
                  key={index}
                >
                  <h2 className="ability">{poke.ability}</h2>
                </div>
              );
            })}
          </div>
          <div className="base_stats">
            {props.data.stats.map((stat, index) => {
              return (
                <div key={index}>
                  <div className="stat_name">
                    <h4>
                      {stat.name}
                      &nbsp;:&emsp;
                    </h4>
                  </div>
                  <div className="stat_value">
                    <h4>{stat.value}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default PokemonInfo;
