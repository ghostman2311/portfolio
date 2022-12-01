import React from "react";
import { Show } from "../../../lib/now-watching";
import MustWatchBadge from "../MustWatchBadge";

type NowWatchingShowCardProps = {
  show: Show;
  setSelectedShow?: (id: string) => void;
};

const NowWatchingShowCard = ({ show, setSelectedShow }: NowWatchingShowCardProps) => {
  const cardContent = () => {
    return (
      <>
        <div className="poster">
          <img src={show.metadata?.Poster} alt={show.name} />
        </div>
        <div className="metadata">
          <h4>{show.name}</h4>
          <sub>{show.metadata?.Genre}</sub>
          <sub>{show.metadata?.Year}</sub>
          {
            show.recommended
              ? <MustWatchBadge />
              : <></>
          }
        </div>
      </>
    );
  };

  if (setSelectedShow) {
    return (
      <div className="nowWatchingShowCard" onClick={() => setSelectedShow(show.imdbId)}>
        {cardContent()}
      </div>
    );
  }
  return (
    <a href={`/now-watching/show/${show.imdbId}`} className="nowWatchingShowCard">
      {cardContent()}
    </a>
  );
};

export default NowWatchingShowCard;
