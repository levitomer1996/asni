import React, { useEffect } from "react";
import { useParams } from "react-router";
import useGetGames from "./useGetGames";
function GamePage() {
  const { title } = useParams();
  const [getGame, games, loader] = useGetGames();
  useEffect(() => {
    getGame(title);
  }, []);
  return <div></div>;
}

export default GamePage;
